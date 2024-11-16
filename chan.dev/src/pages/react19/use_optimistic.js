export const title = "useOtimistic"
export const doc = 'https://react.dev/reference/react/useOptimistic'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-mwn5sn?file=src%2FApp.jsx'

export const steps =
  [
    ["Add <code>useOptimistic</code> to <code>useActionState</code> to show next state immediately",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
    },
    0
  );

  return(
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],
    ["",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      addOptimisticCount(previousCount);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
    },
    0
  );

  const [optimisticCount, addOptimisticCount] = React.useOptimistic(
    count,
    (state) => state + 1
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],

    ["Use <code>optimisticCount</code> in render",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      addOptimisticCount(previousCount);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
    },
    0
  );

  const [optimisticCount, addOptimisticCount] = React.useOptimistic(
    count,
    (state) => state + 1
  );

  return (
    <form>
      {optimisticCount}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],
    ["Extract shared state updater into a function",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      addOptimisticCount(addOne(previousCount));
      await new Promise((resolve) => sestTimeout(resolve, 1000));
      return addOne(previousCount);
    },
    0
  );

  const [optimisticCount, addOptimisticCount] = React.useOptimistic(
    count,
    (state, optimisticCount) => optimisticCount
  );

  return (
    <form>
      {optimisticCount}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],

    ["✅",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      addOptimisticCount(addOne(previousCount));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return addOne(previousCount);
    },
    0
  );s

  const [optimisticCount, addOptimisticCount] = React.useOptimistic(
    count,
    (state, optimisticCount) => optimisticCount
  );

  return (
    <form>
      {optimisticCount}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`]
  ]

