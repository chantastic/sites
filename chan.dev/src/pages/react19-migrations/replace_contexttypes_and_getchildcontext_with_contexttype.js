// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-removing-legacy-context
// asymettric examples

export const title = "Remove Legacy Context (React 19)"

export const before = `import PropTypes from 'prop-types';

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
}`

export const before10 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

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
}`

export const before20 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  getChildContext() {
    return { foo: 'bar' };
  }

  render() {
    return (
      <FooContext value={}>
        <Child />
      </FooContext>
    );
  }
}`
export const before30 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
  }
}`
export const before40 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
  }
}`
export const next10 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
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

export const next21 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const next30 = `import PropTypes from 'prop-types';

const FooContext = React.createContext()

class Parent extends React.Component {
  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const end = `const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value={{ foo: 'bar' }}>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const after = `const FooContext = React.createContext();

function Parent() {
  return (
    <FooContext value={{ foo: 'bar' }}>
      <Child />
    </FooContext>
  );
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context.foo}</div>;
  }
}`

export const after20 = `const FooContext = React.createContext();

function Parent() {
  return (
    <FooContext value={{ foo: 'bar' }}>
      <Child />
    </FooContext>
  );
}

class Child extends React.Component {
  const context = React.use(FooContext);

  render() {
    return <div>{context.foo}</div>;
  }
}`

export const after30 = `const FooContext = React.createContext();

function Parent() {
  return (
    <FooContext value={{ foo: 'bar' }}>
      <Child />
    </FooContext>
  );
}

function Child() {
  const context = React.use(FooContext);

  return <div>{context.foo}</div>;
}`
