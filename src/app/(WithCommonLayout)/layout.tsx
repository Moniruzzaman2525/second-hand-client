
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen pt-[70px]">{children}</main>
    </>
  );
};

export default CommonLayout;
