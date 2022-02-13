import { c as create_ssr_component, e as escape } from "./app-4dc8bca7.js";
function load({ error, status }) {
  return { props: { error, status } };
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<h1>${escape(status)}</h1>

<pre>${escape(error.message)}</pre>



${error.frame ? `<pre>${escape(error.frame)}</pre>` : ``}
${error.stack ? `<pre>${escape(error.stack)}</pre>` : ``}`;
});
export { Error as default, load };
