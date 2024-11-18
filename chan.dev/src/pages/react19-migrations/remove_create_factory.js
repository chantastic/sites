// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-module-pattern-factories

export const before =
  `import { createFactory } from 'react';

const button = createFactory('button');`

export const next =
  `import { createFactory } from 'react';

const button = <button />;`

export const after =
  `const button = <button />;`
