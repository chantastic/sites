
export const title = "form"
export const doc = 'https://react.dev/reference/react/useActionState#reference'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-6n4vrw?file=src%2FApp.jsx'

export const steps =
  [
    ["",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      /* hidden implementation */
    },
    0
  );

  /* hidden useOptimistic */

  return (
    <form action={incrementCount}>
      {optimisticCount}
      <button>Increment</button>
      {isPending && '🌀'}
    </form>
  );
}`], ["",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount) => {
      /* hidden action */
    },
    0
  );

  /* hidden useOptimistic */

  return (
    <form action={incrementCount}>
      {optimisticCount}
      <button>Increment</button>
      <input type="hidden" name="secret" value="Hurray Forms!" />
      {isPending && '🌀'}
    </form>
  );
}`], ["",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount, formData) => {
      /* hidden implementation */
    },
    0
  );

  /* hidden useOptimistic */

  return (
    <form action={incrementCount}>
      {optimisticCount}
      <button>Increment</button>
      <input type="hidden" name="secret" value="Hurray Forms!" />
      {isPending && '🌀'}
    </form>
  );
}`], ["",
      `function StatefulForm() {
  const [count, incrementCount, isPending] = React.useActionState(
    async (currentCount, formData) => {
      formData.get('secret');
      /* hidden implementation */
    },
    0
  );

  /* hidden useOptimistic */

  return (
    <form action={incrementCount}>
      {optimisticCount}
      <button>Increment</button>
      <input type="hidden" name="secret" value="Hurray Forms!" />
      {isPending && '🌀'}
    </form>
  );
}`]
  ]

