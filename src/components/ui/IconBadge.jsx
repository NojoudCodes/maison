export function IconBadge({icon}) {
  return (
    <div className="relative">
      <span className="absolute -top-2 -right-2 flex justify-center items-center bg-red-500 w-4 h-4 rounded-full text-white font-bold" style={{ fontSize: "9px"}}>
        0
      </span>
      <button>
        {icon}
      </button>
    </div>
  )
}
