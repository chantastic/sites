import clsx from 'clsx'

export function PlayButton({ player, size = 'large' }) {
  return (
    <button
      type="button"
      className={clsx(
        'group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700',
        {
          large: 'h-18 w-18 focus:ring focus:ring-offset-4',
          medium: 'h-14 w-14 focus:ring-2 focus:ring-offset-2',
          small: 'h-10 w-10 focus:ring-2 focus:ring-offset-2',
        }[size]
      )}
      onClick={player.toggle}
    >
      <div className="absolute -inset-3 md:hidden"></div>
      <span className="sr-only">{player.playing ? 'Pause' : 'Play'}</span>
      {player.playing ? (
        <svg
          viewBox="0 0 22 28"
          className={clsx(
            'fill-white group-active:fill-white/80',
            {
              large: 'h-7 w-7',
              medium: 'h-5 w-5',
              small: 'h-4 w-4',
            }[size]
          )}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 0C0.671573 0 0 0.671572 0 1.5V26.5C0 27.3284 0.671573 28 1.5 28H4.5C5.32843 28 6 27.3284 6 26.5V1.5C6 0.671573 5.32843 0 4.5 0H1.5ZM17.5 0C16.6716 0 16 0.671572 16 1.5V26.5C16 27.3284 16.6716 28 17.5 28H20.5C21.3284 28 22 27.3284 22 26.5V1.5C22 0.671573 21.3284 0 20.5 0H17.5Z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 36 36"
          className={clsx(
            'fill-white group-active:fill-white/80',
            {
              large: 'h-9 w-9',
              medium: 'h-7 w-7',
              small: 'h-5 w-5',
            }[size]
          )}
          aria-hidden="true"
        >
          <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z" />
        </svg>
      )}
    </button>
  )
}
