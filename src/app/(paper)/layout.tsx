import LayoutProps from './layout.props';

import { Card } from '@/components/ui/card';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Card className="flex max-w-screen-md grow flex-col px-8 py-10 md:p-14">
    {children}
  </Card>
)

export default Layout;
