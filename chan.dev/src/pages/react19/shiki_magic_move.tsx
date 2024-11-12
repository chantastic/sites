import { useEffect, useState } from 'react'
import { getHighlighter, type HighlighterCore } from 'shiki'
import { ShikiMagicMove } from 'shiki-magic-move/react'

import 'shiki-magic-move/dist/style.css'

const languages = ['tsx', 'jsx']

interface Props {
  steps: [string, string][]
  lang?: typeof languages[number]
  options?: { duration: number, stagger: number, lineNumbers: boolean }
  title?: string
}


export default function MagicMove({
  title,
  steps,
  lang = languages[0],
  options = { duration: 700, stagger: 1, lineNumbers: false } }: Props) {
  const [stepCounter, setStepCounter] = useState(0)
  const [highlighter, setHighlighter] = useState<HighlighterCore>()

  useEffect(() => {
    async function initializeHighlighter() {
      const highlighter = await getHighlighter({
        themes: ['tokyo-night'],
        langs: [...languages],
      })
      setHighlighter(highlighter)
    }
    initializeHighlighter()
  }, [])

  function progressStep() {
    return setStepCounter(step => {
      const nextStep = step + 1

      if (nextStep >= steps.length) {
        return 0
      }
      return nextStep
    })
  }

  function regressStep() {
    return setStepCounter(step => {
      const previousStep = step - 1

      if (previousStep < 0) {
        return steps.length - 1
      }

      return previousStep
    })
  }

  let [, stepCode] = steps[stepCounter]

  return (
    <div>
      {highlighter && (
        <div className="relative w-[800px]">
          <h2 className="text-center">{title}</h2>
          <div className="flex gap-12 text-lg">
            <div className="w-1/3">
              <ol>
                {
                  /* show stepName as a complete list. */
                  steps.map(([name], i) => {
                    const stepIsPassed = i <= stepCounter

                    return <li className={`text-gray-600 transition-all duration-200 ease-in-out ${stepIsPassed ? "opacity-1" : "opacity-0"}`} key={name}>{name.split('_').join(' ')}</li>
                  })
                }
              </ol>
              <div className={`transition-all duration-200 ease-in-out text-[2em] text-center mt-4 ${stepCounter === steps.length - 1 ? "opacity-1" : "opacity-0"}`}>✅</div>
            </div>
            <div className="flex-1">
              <ShikiMagicMove
                onStart={() => { console.log("started"); }}
                onEnd={() => { console.log("ended"); }}
                theme="tokyo-night"
                lang={lang}
                highlighter={highlighter}
                code={stepCode}
                options={{ ...options }}
                className="m-0"
              />
            </div>
          </div>
          <div className="flex mt-24 p-4 bg-gray-50 rounded-full shadow-lg">
            <Button onClick={regressStep}>← Previous</Button>
            <Button onClick={progressStep}> Next →</Button>
          </div>
        </div>
      )}
    </div>
  )
}

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={[/*"ring-1 ring-inset ring-gray-300 ",*/ "rounded px-2 py-1 text-lg font-semibold text-gray-900 hover:bg-gray-50"].join(' ')}
      {...props}
    />
  )
}
