// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-module-pattern-factories

export const before =
  `function FactoryComponent() {
  return { render() { return <div />; } }
}`

export const after =
  `function FactoryComponent() {
  return <div />;
}`

