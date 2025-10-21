// Card component placeholder
// TODO: Implement card component
export function Card({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function CardTitle({ children, ...props }) {
  return <h3 {...props}>{children}</h3>
}

export function CardDescription({ children, ...props }) {
  return <p {...props}>{children}</p>
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function CardFooter({ children, ...props }) {
  return <div {...props}>{children}</div>
}
