import LayoutProps from './layout.props';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className='flex max-w-screen-md grow rounded bg-white px-20 py-16'>
    {children}
  </div>
)

export default Layout;
