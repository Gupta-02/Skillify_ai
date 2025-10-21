// Select component placeholder
// TODO: Implement select component using Radix UI
export function Select({ children, ...props }) {
  return <select {...props}>{children}</select>
}

export function SelectTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function SelectValue(props) {
  return <span {...props} />
}

export function SelectContent({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function SelectItem({ children, ...props }) {
  return <option {...props}>{children}</option>
}
