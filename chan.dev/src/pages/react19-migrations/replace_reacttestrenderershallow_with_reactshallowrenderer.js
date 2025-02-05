// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-test-renderer-shallow

export const before =
  `import { shallow } from 'react-test-renderer';`

export const next1 =
  `import { shallow } from 'react-shallow-renderer';`

export const next2 =
  `import ShallowRenderer from 'react-shallow-renderer';`

export const note =
  `import ShallowRenderer from 'react-shallow-renderer';`
