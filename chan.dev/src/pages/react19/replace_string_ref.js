// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs
// npx codemod@latest react/19/replace-string-ref

export const before =
  `class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    return <input ref='input' />;
  }
}`

export const replace_string_ref_with_callback =
  `class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    return <input ref={input => this.input = input} />;
  }
}`

export const reference_instance_property_directly = `class MyComponent extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    return <input ref={input => this.input = input} />;
  }
}`
