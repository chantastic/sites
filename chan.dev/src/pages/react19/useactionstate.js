export const title = "useActionState";
export const doc = 'https://react.dev/reference/react/useActionState'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-bdzfpt?file=src%2FApp.jsx'

export const steps = [["Refactor click counter to <code>useActionState</code>…", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => setCount(increment)}
      >
        Increment
      </button>
    </>
  );
}`],

["Replace <code>useState</code> with <code>useActionState</code>", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, setCount] = React.useActionState(0);

  return (
    <>
      {count}
      <button
        onClick={() => setCount(increment)}
      >
        Increment
      </button>
    </>
  );
}`
], ["Move state update function into <code>useActionState</code>",

  `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, setCount] = React.useActionState(increment, 0);

  return (
    <>
      {count}
      <button
        onClick={setCount}
      >
        Increment
      </button>
    </>
  );
}`],

["Replace <code>onClick</code> with <code>formAction</code>", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, setCount] = React.useActionState(increment, 0);

  return (
    <>
      {count}
      <button
        formAction={setCount}
      >
        Increment
      </button>
    </>
  );
}`],

["Wrap it up in a <code>form</code> element", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, setCount] = React.useActionState(increment, 0);

  return (
    <form>
      {count}
      <button
        formAction={setCount}
      >
        Increment
      </button>
    </form>
  );
}`],


// next steps:
// 1. change simple increment to `handleAction`
// 2. take formData (maybe a hidden input?)
// 3. utilize isPending hook
// 4. permalink (probably different example)

["By convention, we call handler a <code>formAction</code>", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, formAction] = React.useActionState(increment, 0);

  return (
    <form>
      {count}
      <button
        formAction={formAction}
      >
        Increment
      </button>
    </form>
  );
}`],

["✅", `function increment(previous) {
  return previous + 1;
}

function StatefulForm() {
  const [count, formAction] = React.useActionState(increment, 0);

  return (
    <form>
      {count}
      <button
        formAction={formAction}
      >
        Increment
      </button>
    </form>
  );
}`],
]

// by convention, we call these formAction
//["final2", `function increment(previous) {
//  return previous + 1;
//}
//
//function StatefulForm() {
//  const [count, formAction] = React.useActionState(increment, 0);
//
//  return (
//    <form>
//      {count}
//      <button
//        formAction={formAction}
//      >
//        Increment
//      </button>
//    </form>
//  );
//}`],
//
//["final3", `function StatefulForm() {
//  return (
//    <form
//      {count}
//      <button formAction={ }>Increment</button>
//    </form>
//  );
//}`],
//
//["after1", `function StatefulForm() {
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`],
//
//["after10", `function StatefulForm() {
//  const count = 0;
//
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`],
//
//["after11", `function StatefulForm() {
//  const [count] = React.useActionState(, 0);
//
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`]

//export const after12 = `function StatefulForm() {
//  const [count, incrementCount] = React.useActionState(, 0);
//
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`
//
//export const after13 = `function StatefulForm() {
//  const [count, incrementCount] = React.useActionState(0);
//
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`
//
//// click counter with form action
//export const after = `function StatefulForm() {
//  const [count, incrementCount] = React.useActionState(
//    (previousCount) => previousCount + 1,
//    0
//  );
//
//  return (
//    <form
//      {count}
//      <button formAction={incrementCount}>Increment</button>
//    </form>
//  );
//}`


//export const before =
//  `function UpdateName({}) {
//  const [name, setName] = useState("");
//  const [error, setError] = useState(null);
//  const [isPending, startTransition] = useTransition();
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <div>
//      <input value={name} onChange={(event) => setName(event.target.value)} />
//      <button onClick={handleSubmit} disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </div>
//  );
//}`
//
//export const use_form_with_action_handler =
//  `function UpdateName({}) {
//  const [name, setName] = useState("");
//  const [error, setError] = useState(null);
//  const [isPending, startTransition] = useTransition();
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <form action={submitAction}>
//      <input value={name} onChange={(event) => setName(event.target.value)} />
//      <button onClick={handleSubmit} disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
//
//export const remove_indevidual_event_handlers =
//  `function UpdateName({}) {
//  const [name, setName] = useState("");
//  const [error, setError] = useState(null);
//  const [isPending, startTransition] = useTransition();
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <form action={submitAction}>
//      <input name={name} />
//      <button disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
//
//export const use_form_attributes_now_that_this_is_just_a_form =
//  `function UpdateName({}) {
//  const [name, setName] = useState("");
//  const [error, setError] = useState(null);
//  const [isPending, startTransition] = useTransition();
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <form action={submitAction}>
//      <input type="text" name="name" />
//      <button type="submit" disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
//
//export const remove_extranious_state =
//  `function UpdateName({}) {
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <form action={submitAction}>
//      <input type="text" name="name" />
//      <button type="submit" disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
//
//export const next =
//  `function UpdateName({}) {
//  const [error, submitAction, isPending] = useActionState(
//  )
//
//  const handleSubmit = () => {
//    startTransition(async () => {
//      const error = await updateName(name);
//      if (error) {
//        setError(error);
//        return;
//      } 
//      redirect("/path");
//    })
//  };
//
//  return (
//    <form action={submitAction}>
//      <input type="text" name="name" />
//      <button type="submit" disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
//export const after = `function ChangeName({ name, setName }) {
//  const [error, submitAction, isPending] = useActionState(
//    async (previousState, formData) => {
//      const error = await updateName(formData.get("name"));
//      if (error) {
//        return error;
//      }
//      redirect("/path");
//      return null;
//    },
//    null,
//  );
//
//  return (
//    <form action={submitAction}>
//      <input type="text" name="name" />
//      <button type="submit" disabled={isPending}>
//        Update
//      </button>
//      {error && <p>{error}</p>}
//    </form>
//  );
//}`
