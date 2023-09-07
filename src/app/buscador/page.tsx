import { Main, Page as GPage, PageContent, Card, CardBody, Heading } from "grommet";
import PageProps from "./page.props"

const Page: React.FC<PageProps> = () => {
  return (
    <Main align='center'>
      <Heading color="white" level="3" margin="none">BUSCADOR</Heading>
    </Main>
  )
}

export default Page;