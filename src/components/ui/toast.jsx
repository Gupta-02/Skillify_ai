// Toast component placeholder
// TODO: Implement toast notifications using Radix UI
export function Toast({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function ToastProvider({ children }) {
  return <>{children}</>
}

export function useToast() {
  return {
    toast: (options) => console.log('Toast:', options)
  }
}
