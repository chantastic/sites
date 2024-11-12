// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-react-apis
// npx codemod@latest react/19/prop-types-typescript

export const title = 'Migrate from PropTypes to TypeScript interface'

export const before =
  `import PropTypes from 'prop-types';

export function Heading({ text }) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string,
};

Heading.defaultProps = {
  text: 'Hello, world!',
};`


export const replace_defaultProps_with_destructuring_assignment_default_value =
  `import PropTypes from 'prop-types';

export function Heading({
  text = 'Hello, world!'
}) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string,
};`

export const replace_propTypes_with_typescript_interface =
  `import PropTypes from 'prop-types';

interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}) {
  return <h1>{text}</h1>;
}`

export const apply_typescript_interface_to_props =
  `import PropTypes from 'prop-types';

interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}: Props) {
  return <h1>{text}</h1>;
}`

export const remove_PropTypes_import =
  `interface Props {
  text?: string;
}

export function Heading({
  text = 'Hello, world!'
}: Props) {
  return <h1>{text}</h1>;
}`

