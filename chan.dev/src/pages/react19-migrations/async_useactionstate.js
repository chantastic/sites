export const title = "Async Actions"
export const doc = 'https://react.dev/reference/react/useActionState'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-yttb7n?file=src%2FApp.jsx'

export const steps =
  [
    ["Async Actions",
      `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(
    (previousCount) => previousCount + 1,
    0
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`],
    ["Make <code>useActionState</code> callback asynchronous",
      `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(
    async (previousCount) => previousCount + 1,
    0
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`], ["Insert some async behavior into Action callback",
      `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(
    async (previousCount) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
    },
    0
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`], ["Destructuer <code>isPending</code> from third item in <code>useActionState</code> tuple",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
    },
    0
  );

  return (
    <form>
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`], ["Use <code>isPending</code> to show loading state for the form",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (previousCount) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return previousCount + 1;
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
}`],
    ["✅",
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
}`]
  ]
