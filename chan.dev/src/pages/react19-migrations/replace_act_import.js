// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-dom-test-utils
// npx codemod@latest react/19/replace-act-import

export const before =
  `import {act} from 'react-dom/test-utils'`

export const after =
  `import {act} from 'react';`
