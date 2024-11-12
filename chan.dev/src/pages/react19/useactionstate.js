export const before = `function increment(previous) {
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
}`

export const next1 = `function increment(previous) {
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

export const next2 = `function increment(previous) {
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
}`

export const next3 = `function increment(previous) {
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
}`

export const next4 = `function increment(previous) {
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
}`


// next steps:
// 1. change simple increment to `handleAction`
// 2. take formData (maybe a hidden input?)
// 3. utilize isPending hook
// 4. permalink (probably different example)

export const final = `function increment(previous) {
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
}`

// by convention, we call these formAction
export const final2 = `function increment(previous) {
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
}`

export const after2 = `function StatefulForm() {
  return (
    <form
      {count}
      <button formAction={ }>Increment</button>
    </form>
  );
}`

export const after1 = `function StatefulForm() {
  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`

export const after10 = `function StatefulForm() {
  const count = 0;

  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`

export const after11 = `function StatefulForm() {
  const [count] = React.useActionState(, 0);

  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`

export const after12 = `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(, 0);

  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`

export const after13 = `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(0);

  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`

// click counter with form action
export const after = `function StatefulForm() {
  const [count, incrementCount] = React.useActionState(
    (previousCount) => previousCount + 1,
    0
  );

  return (
    <form
      {count}
      <button formAction={incrementCount}>Increment</button>
    </form>
  );
}`


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
