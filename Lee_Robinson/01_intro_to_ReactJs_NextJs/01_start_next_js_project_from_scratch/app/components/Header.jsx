export function Header({ subject, children }) {
  return (
    <header>
      <h1>This is the header</h1>
      <h2>Lesson about {subject}</h2>
      {children}
    </header>
  );
}
