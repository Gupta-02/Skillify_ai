// Dialog component placeholder
// TODO: Implement dialog component using Radix UI
export function Dialog({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogContent({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogHeader({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogTitle({ children, ...props }) {
  return <h2 {...props}>{children}</h2>
}

export function DialogDescription({ children, ...props }) {
  return <p {...props}>{children}</p>
}
