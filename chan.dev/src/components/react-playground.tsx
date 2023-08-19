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
  var minutes = Math.floor((totalMilliseconds % 3600000) / 60000)
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
  const [elapsedMilliseconds, setElapsedMilliseconds] = React.useState(0);

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
      <button onClick={toggleStopwatch}>{running ? "Stop" : "Start"}</button>
      <button
        type="button"
        onClick={() => {
          console.log(elapsedMilliseconds);
        }}
      >
        lap
      </button>
      <button type="button" onClick={() => setElapsedMilliseconds(0)}>
        Clear
      </button>
    </div>
  );
}

// implement lap.

// // --- context
// 1. It's ok to say "shit" as a default.
const ExpletiveContext = React.createContext("shit");

// 2. But use a word that's contextually appropriate.
function ContextualExclamation() {
  let word = React.useContext(ExpletiveContext);

  return <span>Oh {word}!</span>;
}

// 3. At grandma's house, use the word "snap" instead
function GrandmasHouse(props) {
  return (
    <ExpletiveContext.Provider value="snap">
      {props.children}
    </ExpletiveContext.Provider>
  );
}

// 4. Something exciting happened. What do you say?
function VisitToGrandmasHouse() {
  return (
    <GrandmasHouse>
      <ContextualExclamation />
    </GrandmasHouse>
  );
}

export { VisitToGrandmasHouse as AShitExample };

// =============================================

// let ExpandedContext = React.createContext();
// let OverflowingContext = React.createContext();

// function ReadMore({ children }) {
//   let [expanded, setExpanded] = React.useState(true);
//   let [overflowing, setOverflowing] = React.useState(false);
//   let [contentScrollHeight, setContentScrollHeight] = React.useState(100);

//   let contentRef = React.useRef(null);

//   // let contentId = React.useId();

//   // React.useInsertionEffect(() => {
//   //   console.log(contentRef);
//   // });

//   React.useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.maxHeight = expanded
//         ? `${contentRef.current.scrollHeight}px`
//         : `100px`;
//       setOverflowing(
//         /*contentRef.current.scrollHeight */ contentScrollHeight > 100
//       );
//     }
//   }, [expanded, overflowing]);

//   // // Add useEffect to re-check height on resize
//   // React.useEffect(() => {
//   //   window.addEventListener("resize", () => {
//   //     setContentScrollHeight(contentRef.current.scrollHeight);
//   //   });
//   // });

//   return (
//     <ExpandedContext.Provider value={[expanded, setExpanded]}>
//       <OverflowingContext.Provider value={[overflowing, setOverflowing]}>
//         <div>
//           {contentScrollHeight}
//           <ReadMoreContent ref={contentRef}>{children}</ReadMoreContent>
//           {/* <div
//             style={{
//               transition: "all .3s ease",
//               overflow: "hidden",
//             }}
//             ref={contentRef}
//           >
//             {children}
//           </div> */}
//           {<ReadMoreButton />}
//         </div>
//       </OverflowingContext.Provider>
//     </ExpandedContext.Provider>
//   );
// }

// const ReadMoreContent = React.forwardRef(function ({ children }, ref) {
//   return (
//     <div
//       style={{
//         transition: "all .3s ease",
//         overflow: "hidden",
//       }}
//       ref={ref}
//     >
//       {children}
//     </div>
//   );
// });

// function ReadMoreButton() {
//   let [overflowing] = React.useContext(OverflowingContext);
//   let [expanded, setExpanded] = React.useContext(ExpandedContext);

//   if (!overflowing) {
//     return null;
//   }

//   return (
//     <button
//       onClick={() => {
//         setExpanded(!expanded);
//       }}
//     >
//       Read {expanded ? "less" : "more"}
//     </button>
//   );
// }

/* ---------- FOLLOWING TUTORIAL --------- */

// # additional ideas
// - speed setting: fast, slow, or direct value
// - responsive

// (convert to run-once, with empty deps)
// (- use console.log to demonstrate)
// add prop to control maxHeight (consider that it will impact both expanded and content Height)

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function useWindowResize(handleResize) {
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
}

const ExpandedContext = React.createContext();
const ContentHeightContext = React.createContext();

function ShowMoreButton() {
  let [expanded, setExpanded] = React.useContext(ExpandedContext);
  let [contentHeight, setContentHeight] =
    React.useContext(ContentHeightContext);

  return (
    <>
      {contentHeight > 100 && (
        <button onClick={() => setExpanded(!expanded)}>
          Show {expanded ? "less" : "more"}
        </button>
      )}
    </>
  );
}

export function ShowMore({ children }) {
  let [expanded, setExpanded] = React.useState(true);
  let [contentHeight, setContentHeight] = React.useState();

  const contentRef = React.useRef(null);

  React.useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  });

  let handleResize = debounce(function () {
    setContentHeight(contentRef.current.scrollHeight);
    console.log("resizing…");
  });

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useWindowResize(handleResize);

  return (
    <ExpandedContext.Provider value={[expanded, setExpanded]}>
      <ContentHeightContext.Provider value={[contentHeight, setContentHeight]}>
        <div>
          <div
            ref={contentRef}
            style={{
              maxHeight: expanded ? contentHeight : "100px",
              overflow: "hidden",
              transition: "all .5s ease",
            }}
          >
            {children}
          </div>
          {/* {contentHeight > 100 && <ShowMoreButton />} */}
          <ShowMoreButton />
        </div>
      </ContentHeightContext.Provider>
    </ExpandedContext.Provider>
  );
}

export function App() {
  return (
    <ShowMore>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus
      turpis. Nulla efficitur pulvinar dui id imperdiet. Nulla cursus nulla id
      elit imperdiet commodo. Praesent ullamcorper eros quis maximus varius.
      {/* Integer pellentesque urna nulla, nec vestibulum leo malesuada quis.
      Maecenas sit amet mauris eu diam blandit molestie bibendum sit amet
      mauris. Nullam sed posuere lacus. Sed cursus bibendum turpis tincidunt
      volutpat. Duis molestie volutpat urna, in rutrum ante rhoncus volutpat.
      Maecenas a imperdiet dolor. Duis ut ex tincidunt, tincidunt velit in,
      vehicula dolor. Suspendisse dictum porttitor massa. Cras pulvinar
      ultricies lacus ut maximus. In gravida turpis purus, eu mattis odio
      tincidunt eget. */}
    </ShowMore>
  );
}
