// User-related server actions
'use server'

import dbConnect from '@/lib/dbConnect'
import User from '@/models/user.model.js'
import bcrypt from 'bcryptjs'

export async function createUser(userData) {
  try {
    await dbConnect()
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email })
    if (existingUser) {
      return { error: 'User already exists' }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10)

    // Create new user
    const user = await User.create({
      ...userData,
      password: hashedPassword,
    })

    return { success: true, userId: user._id.toString() }
  } catch (error) {
    console.error('Error creating user:', error)
    return { error: 'Failed to create user' }
  }
}

export async function getUserById(userId) {
  try {
    await dbConnect()
    const user = await User.findById(userId).select('-password')
    return { success: true, user: JSON.parse(JSON.stringify(user)) }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { error: 'Failed to fetch user' }
  }
}
