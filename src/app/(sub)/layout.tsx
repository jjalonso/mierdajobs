import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex w-full max-w-screen-md flex-col self-center pb-4">
        {children}
      </main>
    </>
  );
};

export default Layout;

