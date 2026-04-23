import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

let AudioPlayerContext = createContext()

let reducers = {
  SET_META(state, action) {
    return { ...state, meta: action.payload }
  },
  PLAY(state, _action) {
    return { ...state, playing: true }
  },
  PAUSE(state, _action) {
    return { ...state, playing: false }
  },
  TOGGLE_MUTE(state, _action) {
    return { ...state, muted: !state.muted }
  },
  SET_CURRENT_TIME(state, action) {
    return { ...state, currentTime: action.payload }
  },
  SET_DURATION(state, action) {
    return { ...state, duration: action.payload }
  },
}

function audioReducer(state, action) {
  return reducers[action.type](state, action)
}

export function AudioProvider({ children }) {
  let [state, dispatch] = useReducer(audioReducer, {
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    meta: null,
  })
  let playerRef = useRef(null)

  let actions = useMemo(() => {
    return {
      play(data) {
        if (data) {
          dispatch({ type: 'SET_META', payload: data })

          if (playerRef.current.currentSrc !== data.audio.src) {
            let playbackRate = playerRef.current.playbackRate
            playerRef.current.src = data.audio.src
            playerRef.current.load()
            playerRef.current.pause()
            playerRef.current.playbackRate = playbackRate
            playerRef.currentTime = 0
          }
        }

        playerRef.current.play()
      },
      pause() {
        playerRef.current.pause()
      },
      toggle(data) {
        this.isPlaying(data) ? actions.pause() : actions.play(data)
      },
      seekBy(amount) {
        playerRef.current.currentTime += amount
      },
      seek(time) {
        playerRef.current.currentTime = time
      },
      playbackRate(rate) {
        playerRef.current.playbackRate = rate
      },
      toggleMute() {
        dispatch({ type: 'TOGGLE_MUTE' })
      },
      isPlaying(data) {
        return data
          ? state.playing && playerRef.current.currentSrc === data.audio.src
          : state.playing
      },
    }
  }, [state.playing])

  let api = useMemo(() => ({ ...state, ...actions }), [state, actions])

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}
      </AudioPlayerContext.Provider>
      <audio
        ref={playerRef}
        onPlay={() => dispatch({ type: 'PLAY' })}
        onPause={() => dispatch({ type: 'PAUSE' })}
        onTimeUpdate={(event) => {
          dispatch({
            type: 'SET_CURRENT_TIME',
            payload: Math.floor(event.target.currentTime),
          })
        }}
        onDurationChange={(event) => {
          dispatch({
            type: 'SET_DURATION',
            payload: Math.floor(event.target.duration),
          })
        }}
        className="hidden"
        muted={state.muted}
      />
    </>
  )
}

export function useAudioPlayer(data) {
  let player = useContext(AudioPlayerContext)

  return useMemo(
    () => ({
      ...player,
      play() {
        player.play(data)
      },
      toggle() {
        player.toggle(data)
      },
      get playing() {
        return player.isPlaying(data)
      },
    }),
    [player, data]
  )
}
