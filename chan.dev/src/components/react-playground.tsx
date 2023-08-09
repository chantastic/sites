import * as React from "react";

// - merge classes
// -

// A lesson in composition
// I'll be the manager and you'll implement what I ask for
// 1. Implement a Greeting component renders the full `h1#Hello World!`
// 1. Add configurability via props, using `name`
// 1. We need to take props (spread props)
// 1. What if they're a guest or didn't add a name? Remove the awkward space. template string and conditional
// 1. Sometimes we have bad input (extra spaces). How can we fix? `trim()`
// 1. We now want to customize the saluation. prop `salutation`
// 1. Oops! that looks terrible of noone puts a default in. Let's add a default.
// 1. This is starting to feel overly enthusiastic. Can customize the punctuation? `punctuation` prop
// 1. Now we have a real problem, not all should be h1s. how do we customize the element? polymorphic as prop + renaming argument
// css
// style
// 1. THIS IS A LOT! How else might we have done this?
//    - refactor
// 1. context, user object
export function Greeting({
  as: As = "h1",
  className,
  name,
  salutation = "Hello",
  punctuation = "!",
  ...props
}) {
  return (
    <As {...props}>
      {salutation}
      {name ? ` ${String(name).trim()}` : ""}
      {punctuation}
    </As>
  );
}

export function Counter() {
  let [count, setCount] = React.useState(2);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </>
  );
}

// Instructions steps
// 1. Render an element that displays `00:00` (maybe just start with a single number. adapt the previous component)
// 1. Add a button that calls `alert` on
// 1. Create state for `ms` and add it to the singles ms place
// 1. Pad string
// 1. Use chatgpt to program for me ()
// 1. Action to track when timer is on. (display state. tip: gotta toString booleans to render)
// 1. Change text with condition
// 1. add useEffect to start clock (running)
// 1. ask chatgpt how to make it more accurate
// 1. can we wrap it without recomposing?
// 1. not yet, we need to extract data first

function formatMilliseconds(totalMilliseconds) {
  var hours = Math.floor(totalMilliseconds / 3600000)
    .toString()
    .padStart(2, "0");
  var minutes = Math.floor(
    (totalMilliseconds % 3600000) / 60000
  )
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((totalMilliseconds % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  var milliseconds = Math.floor(totalMilliseconds % 1000)
    .toString()
    .padStart(3, "0");

  return `${
    hours !== "00" ? `${hours}:` : ""
  }${minutes}:${seconds}:${milliseconds}`;
}

export function Stopwatch() {
  const [running, setRunning] = React.useState(false);
  const [elapsedMilliseconds, setElapsedMilliseconds] =
    React.useState(0);

  React.useEffect(() => {
    let animationFrameId;
    let startTime = performance.now();

    const update = () => {
      if (running) {
        const currentElapsedMilliseconds =
          performance.now() - startTime + elapsedMilliseconds;
        setElapsedMilliseconds(currentElapsedMilliseconds);
        animationFrameId = requestAnimationFrame(update);
      }
    };

    if (running) {
      update();
    } else {
      startTime = performance.now() - elapsedMilliseconds;
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [running, elapsedMilliseconds]);

  function toggleStopwatch() {
    setRunning((running) => !running);
  }

  return (
    <div>
      <div>{formatMilliseconds(elapsedMilliseconds)}</div>
      <button onClick={toggleStopwatch}>
        {running ? "Stop" : "Start"}
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(elapsedMilliseconds);
        }}
      >
        lap
      </button>
      <button type="button" onClick={() => setElapsedMilliseconds(0)}>Clear</button>
    </div>
  );
}

// implement lap.
