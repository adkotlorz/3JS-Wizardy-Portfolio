export default function SubPagesLayout({ children }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <button>Home</button>
      {children}
    </section>
  );
}
