// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-hydrate
// npx codemod@latest react/19/replace-reactdom-render

export const before =
  `import {hydrate} from 'react-dom';

hydrate(<App />, document.getElementById('root'));`

export const next1 =
  `import {hydrate} from 'react-dom';
import {hydrateRoot} from 'react-dom/client';

hydrate(<App />, document.getElementById('root'));`

export const next2 =
  `import {hydrate} from 'react-dom';
import {hydrateRoot} from 'react-dom/client';

hydrateRoot(<App />, document.getElementById('root'));`

export const next3 =
  `import {hydrate} from 'react-dom';
import {hydrateRoot} from 'react-dom/client';

hydrateRoot(document.getElementById('root'), <App />);`

export const after =
  `import {hydrateRoot} from 'react-dom/client';

hydrateRoot(document.getElementById('root'), <App />);`
