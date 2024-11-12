// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-removing-legacy-context

export const before =
  `import PropTypes from 'prop-types';

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  getChildContext() {
    return { foo: 'bar' };
  }

  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const remove_childContextTypes_and_getChildContext =
  `import PropTypes from 'prop-types';

class Parent extends React.Component {
  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const replace_childContextTypes_and_getChildContext_with_createContext =
  `import PropTypes from 'prop-types';

const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const wrap_Context_children_in_Context =
  `import PropTypes from 'prop-types';

const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    )
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const replace_static_contextTypes_with_static_contextType =
  `import PropTypes from 'prop-types';

const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    )
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const remove_PropTypes =
  `const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context}</div>;
  }
}`
