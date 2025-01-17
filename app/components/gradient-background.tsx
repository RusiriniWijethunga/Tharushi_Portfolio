export default function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-700 rounded-full opacity-20 blur-[100px]" />
    </div>
  )
}

