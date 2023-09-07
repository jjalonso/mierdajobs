import { Main, Page as GPage, PageContent, Card, CardBody, Heading } from "grommet";
import PageProps from "./page.props"
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

const Page: React.FC<PageProps> = () => {
  redirect('/buscador', RedirectType.replace);
}

export default Page;