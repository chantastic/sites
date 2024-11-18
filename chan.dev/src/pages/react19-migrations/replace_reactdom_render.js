// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-render
// npx codemod@latest react/19/replace-reactdom-render

export const before =
  `import {render} from 'react-dom';

render(<App />, document.getElementById('root'));`

export const next1 =
  `import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';

render(<App />, document.getElementById('root'));`

export const next2 =
  `import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
render(<App />);`

export const next3 =
  `import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`

export const after =
  `import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`
