export const title = 'Migrate from PropTypes to TypeScript interface'
export const codemod = 'npx codemod@latest react/19/prop-types-typescript'
export const doc = 'https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-react-apis'
export const playground = 'https://stackblitz.com/edit/vitejs-vite-vw1vnh?file=src%2FApp.tsx'

export const steps = [
  ["Migrate from PropTypes to TypeScirpt interface",
    `import PropTypes from 'prop-types';

Heading.propTypes = {
  text: PropTypes.string,
};

Heading.defaultProps = {
  text: 'Hello, world!',
};

export function Heading({
  text
}) {
  return <h1>{text}</h1>;
}`],


  ["Replace <code>defaultProps</code> with destructuring assignment default value",
    `import PropTypes from 'prop-types';

Heading.propTypes = {
  text: PropTypes.string,
};

export function Heading({
  text = 'Hello, world!'
}) {
  return <h1>{text}</h1>;
}`],

  ["Replace <code>propTypes</code> with TypeScript interface",
    `import PropTypes from 'prop-types';

interface Props {
  text: string;
}

export function Heading({
  text = 'Hello, world!'
}) {
  return <h1>{text}</h1>;
}`],

  ["Make the <code>text</code> prop optional, because we provide a default value",
    `import PropTypes from 'prop-types';

interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}) {
  return <h1>{text}</h1>;
}`],
  ["Apply TypeScirpt interface to props",
    `import PropTypes from 'prop-types';

interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}: Props) {
  return <h1>{text}</h1>;
}`],

  ["Remove <code>PropTypes</code> import",
    `interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}: Props) {
  return <h1>{text}</h1>;
}`],
  ["✅",
    `interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}: Props) {
  return <h1>{text}</h1>;
}`]
]

