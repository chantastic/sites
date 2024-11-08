import { useEffect, useState } from 'react'
import { getHighlighter, type HighlighterCore } from 'shiki'
import { ShikiMagicMove } from 'shiki-magic-move/react'

import 'shiki-magic-move/dist/style.css'

const languages = ['tsx', 'jsx']

interface Props {
  steps: [string, string][]
  lang?: typeof languages[number]
  options?: { duration: number, stagger: number, lineNumbers: boolean }
}


export default function MagicMove({
  steps,
  lang = languages[0],
  options = { duration: 600, stagger: 0.3, lineNumbers: false } }: Props) {
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
    <div className="prose">
      {highlighter && (
        <>
          <button onClick={regressStep}>&lt;</button>
          <button onClick={progressStep}>&gt;</button>
          <ol>
            {
              /* show stepName as a complete list. */
              steps.map(([name], i) => {
                const stepIsPassed = i <= stepCounter

                if (stepIsPassed) {
                  return <li className="text-gray-100" key={name}><button onClick={() => setStepCounter(i)}>✅ {name.split('_').join(' ')}</button></li>
                }

                return <li key={name}><button onClick={() => setStepCounter(i)}>{name.split('_').join(' ')}</button></li>
              })
            }
          </ol>
          <ShikiMagicMove
            theme="tokyo-night"
            lang={lang}
            highlighter={highlighter}
            code={stepCode}
            options={options}
            className="p-4 w-full"
          />
        </>
      )}
    </div>
  )
}
