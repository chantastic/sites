export default function({ children, ...props }) {
  return (
    <div>
      <main {...props} style={{ maxWidth: "32em" }}>
        <p>
          <strong>
            <a href="/">Learn React</a>
          </strong>
        </p>

        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()} Michael Chan</footer>
    </div>
  );
}
