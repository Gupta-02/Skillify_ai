// Progress component placeholder
// TODO: Implement progress component using Radix UI
export function Progress(props) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${props.value}%` }}
      />
    </div>
  )
}
