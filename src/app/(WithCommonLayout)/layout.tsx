

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <nav>Navbar</nav>
      <main className="min-h-screen">{children}</main>
     <footer>Footer</footer>
    </>
  );
};

export default CommonLayout;
