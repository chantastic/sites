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

export const remove_defaultProps =
  `import PropTypes from 'prop-types';

export function Heading({ text }) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string,
};`

export const replace_defaultProps_with_destructuring_assignment_default_value =
  `import PropTypes from 'prop-types';

export function Heading({ text = 'Hello, world!' }) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string,
};`

export const remove_propTypes =
  `export function Heading({ text = 'Hello, world!' }) {
  return <h1>{text}</h1>;
}`

export const replace_propTypes_with_typescript_interface =
  `interface Props {
  text?: string;
}

export function Heading({ text = 'Hello, world!' }) {
  return <h1>{text}</h1>;
}`

export const apply_typescript_interface_to_props =
  `interface Props {
  text?: string;
}

export function Heading({ text = 'Hello, world!' }: Props) {
  return <h1>{text}</h1>;
}`

