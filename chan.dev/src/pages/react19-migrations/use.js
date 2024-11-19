export const title = "use"
export const doc = 'https://react.dev/reference/react/use'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-7pw9l7?embed=1&file=src%2FApp.jsx'

export const steps =
  [
    ["",
      `const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext.Provider value="From context">
      <Child />
    </MyContext.Provider>
  );
}

function Child({ show }) {
  const contextValue = React.use(MyContext);
  return <div>{contextValue}</div>;

  return false;
}`], ["",
      `const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext value="From context">
      <Child />
    </MyContext>
  );
}

function Child({ show }) {
  const contextValue = React.use(MyContext);
  return <div>{contextValue}</div>;

  return false;
}`], ["",
      `const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext value="From context">
      <Child show={true} />
    </MyContext>
  );
}

function Child({ show }) {
  const contextValue = React.use(MyContext);
  return <div>{contextValue}</div>;

  return false;
}`], ["",
      `const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext value="From context">
      <Child show={true} />
    </MyContext>
  );
}

function Child({ show }) {
  if (show) {
    const contextValue = React.use(MyContext);
    return <div>{contextValue}</div>;
  }

  return false;
}`]
  ]

