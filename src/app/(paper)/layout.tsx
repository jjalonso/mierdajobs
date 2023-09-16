import LayoutProps from './layout.props';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex max-w-screen-md grow flex-col bg-white px-8 py-10 md:p-14">
    {children}
  </div>
)

export default Layout;
