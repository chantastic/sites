// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs
// npx codemod@latest react/19/replace-string-ref

export default {
  title: "Replace String Ref with Callback",
  steps: [[
    "before",
    `class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    return <input ref='input' />;
  }
}`
  ],

  [
    "replace string <code>ref</code> with callback",
    `class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    return <input ref={input => this.input = input} />;
  }
}`
  ],

  [
    "reference instance property directly",
    `class MyComponent extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    return <input ref={input => this.input = input} />;
  }
}`]

  ]
}
