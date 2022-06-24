import { useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AudioPlayer } from '@/components/player/AudioPlayer'
import posterImage from '@/images/poster.png'

function random(length, min, max, seed = 1) {
  return Array.from({ length }).map(() => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  })
}

function Waveform() {
  let id = useId()
  let barCount = 100
  let barWidth = 2
  let barGap = 2
  let lengths = random(barCount, 40, 100)

  return (
    <svg aria-hidden="true" className="absolute left-0 top-0 h-20 w-full">
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="#4989E8" />
          <stop offset="50%" stopColor="#6159DA" />
          <stop offset="100%" stopColor="#FF54AD" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern
          id={`${id}-pattern`}
          width={barCount * barWidth + barCount * barGap}
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: barCount }).map((_, index) => (
            <rect
              key={index}
              width={barWidth}
              height={`${lengths[index]}%`}
              x={barGap * (index + 1) + barWidth * index}
              fill={`url(#${id}-fade)`}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-gradient)`}
        mask={`url(#${id}-mask)`}
        opacity="0.25"
      />
    </svg>
  )
}

function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <svg aria-hidden="true" className="h-2.5 w-2.5">
          <path
            d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
            className="fill-violet-300"
          />
          <path
            d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
            className="fill-pink-300"
          />
        </svg>
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx('mt-2 text-base leading-7 text-slate-700', {
          'lg:line-clamp-4': !isExpanded,
        })}
      >
        In this show, Eric and Wes dig deep to get to the facts with guests who
        have been labeled villains by a society quick to judge, without actually
        getting the full story. Tune in every Thursday to get to the truth with
        another misunderstood outcast as they share the missing context in their
        tragic tale.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}

export function Layout({ children }) {
  return (
    <>
      <div className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500">Hosted by</span>
          <span className="mt-6 flex font-bold text-slate-900">
            <span className="after:mt-6 after:text-slate-400 after:content-['/']">
              Eric Gordon
            </span>
            <span className="mt-6">Wes Mantooth</span>
          </span>
        </div>
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
          <Link href="/">
            <a
              className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
              aria-label="Homepage"
            >
              <Image
                src={posterImage}
                alt=""
                layout="responsive"
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                priority
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
            </a>
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-xl font-bold text-slate-900">
              <Link href="/">
                <a>Their Side</a>
              </Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
              Conversations with the most tragically misunderstood people of our
              time.
            </p>
          </div>
          <AboutSection className="mt-12 hidden lg:block" />
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
              <svg aria-hidden="true" className="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  className="fill-indigo-300"
                />
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  className="fill-blue-300"
                />
              </svg>
              <span className="ml-2.5">Listen</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul className="mt-4 flex justify-center space-x-10 text-base font-medium leading-7 text-slate-700 sm:space-x-8 lg:block lg:space-x-0 lg:space-y-4">
              <li className="flex">
                <Link href="/">
                  <a className="group flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                    >
                      <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
                    </svg>
                    <span className="sr-only sm:hidden">Spotify</span>
                    <span className="hidden sm:ml-3 sm:block">Spotify</span>
                  </a>
                </Link>
              </li>
              <li className="flex">
                <Link href="/">
                  <a className="group flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                    >
                      <path d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Z" />
                      <path
                        d="M18.056 18.488a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.743 0-1.376.24-1.736.624-.183.2-.287.4-.32.688-.064.56-.024 1.04.04 1.816.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM17.968 14.408c0 1.088-.88 1.967-1.968 1.967a1.967 1.967 0 0 1-1.968-1.967c0-1.088.88-1.968 1.968-1.968s1.968.888 1.968 1.968Z"
                        className="fill-white"
                      />
                      <path
                        d="M15.976 6.656c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12-.04-.288-.088-.576-.12-.864a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Z"
                        className="fill-white"
                      />
                      <path
                        d="M15.784 9.456c-2.992.112-5.392 2.584-5.432 5.576a5.65 5.65 0 0 0 2.472 4.744c.072.048.176-.008.176-.096a7.853 7.853 0 0 1-.008-.968.326.326 0 0 0-.112-.272 4.574 4.574 0 0 1-1.448-3.456 4.585 4.585 0 0 1 4.392-4.448 4.574 4.574 0 0 1 4.752 4.568c0 1.312-.56 2.496-1.448 3.336a.381.381 0 0 0-.112.272c.016.312.008.616-.008.96-.008.088.096.152.176.096a5.661 5.661 0 0 0 2.472-4.672c.008-3.184-2.656-5.768-5.872-5.64Z"
                        className="fill-white"
                      />
                    </svg>
                    <span className="sr-only sm:hidden">Apple Podcast</span>
                    <span className="hidden sm:ml-3 sm:block">
                      Apple Podcast
                    </span>
                  </a>
                </Link>
              </li>
              <li className="flex">
                <Link href="/">
                  <a className="group flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                    >
                      <path d="M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z" />
                    </svg>
                    <span className="sr-only sm:hidden">Overcast</span>
                    <span className="hidden sm:ml-3 sm:block">Overcast</span>
                  </a>
                </Link>
              </li>
              <li className="flex">
                <Link href="/">
                  <a className="group flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                    >
                      <path d="M23.5 4h-15A4.5 4.5 0 0 0 4 8.5v15A4.5 4.5 0 0 0 8.5 28h15a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 23.5 4Z" />
                      <path
                        d="M10 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        className="fill-white"
                      />
                      <path
                        d="M7 16a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Z"
                        className="fill-white"
                      />
                      <path
                        d="M7 10a15 15 0 0 1 15 15h3A18 18 0 0 0 7 7v3Z"
                        className="fill-white"
                      />
                    </svg>
                    <span className="sr-only sm:hidden">RSS Feed</span>
                    <span className="hidden sm:ml-3 sm:block">RSS Feed</span>
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform />
        <div className="relative">{children}</div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection />
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <svg
              aria-hidden="true"
              viewBox="0 0 11 12"
              className="h-3 w-auto fill-slate-300"
            >
              <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
            </svg>
            <span className="ml-2.5">Hosted by</span>
          </h2>
          <div className="mt-2 flex text-sm font-bold leading-7 text-slate-900">
            <span className="after:ml-6 after:text-slate-400 after:content-['/']">
              Norm MacDonald
            </span>
            <span className="ml-6">Bob Saget</span>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 right-0 bottom-0 z-10 rounded-lg lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </>
  )
}
