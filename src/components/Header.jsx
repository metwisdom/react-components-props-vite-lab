function Header({ name }) {
  return (
    <header className="mb-8 border-b border-white pb-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        Personal Blog
      </p>
      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        {name}
      </h1>
    </header>
  );
}

export default Header;