import Header from "../../components/header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex w-full max-w-screen-md flex-col self-center">
        {children}
      </main>
    </>
  );
};

export default Layout;

