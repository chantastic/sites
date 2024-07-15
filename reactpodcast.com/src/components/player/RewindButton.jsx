export function RewindButton({ player, amount = 10 }) {
  return (
    <button
      type="button"
      className="group relative rounded-full focus:outline-none"
      onClick={() => player.seekBy(-amount)}
    >
      <div className="absolute -inset-4 -right-2 md:hidden"></div>
      <span className="sr-only">Rewind {amount} seconds</span>
      <svg
        className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 15V19"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
