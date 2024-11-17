export const title = "useOtimistic"
export const doc = 'https://react.dev/reference/react/useOptimistic'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-mwn5sn?file=src%2FApp.jsx'

export const steps =
  [
    ["Implement optimistic count.",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      const nextCount = addOne(currentCount);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return nextCount;
    },
    0
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`], ["Create a new optimistic count with <code>useOptimistic</code.",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      const nextCount = addOne(currentCount);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return nextCount;
    },
    0
  );

  const [
    optimisticCount
  ] = React.useOptimistic(
    count
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],

    ["Implement an optimisticCount update function",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      const nextCount = addOne(currentCount);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return nextCount;
    },
    0
  );

  const [
    optimisticCount,
    updateOptimisticCount,
  ] = React.useOptimistic(
    count,
    (state, optimisticCount) => optimisticCount
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],

    ["Call <code>updateOptimisticCount</code> with <code>nextCount</code>",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      const nextCount = addOne(currentCount);

      updateOptimisticCount(nextCount);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return nextCount;
    },
    0
  );

  const [
    optimisticCount,
    updateOptimisticCount,
  ] = React.useOptimistic(
    count,
    (state, optimisticCount) => optimisticCount
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`],

    ["Render <code>optimisticCount</code>",
      `function addOne(number) {
  return number + 1;
}

function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      const nextCount = addOne(currentCount);

      updateOptimisticCount(nextCount);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return nextCount;
    },
    0
  );

  const [
    optimisticCount,
    updateOptimisticCount,
  ] = React.useOptimistic(
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

