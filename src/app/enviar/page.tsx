import { Main, Page as GPage, PageContent, Card, CardBody, Heading } from "grommet";
import PageProps from "./page.props"

const Page: React.FC<PageProps> = () => {
  return (
    <Main align='center'>
      {/* <Card>
        <CardBody pad="medium">
          <Heading level="3" margin="none">
            TODO
          </Heading>
        </CardBody>

      </Card>
      HOME PAGE */}
      <Heading color="white" level="3" margin="none">ENVIAR</Heading>
    </Main>
  )
}

export default Page;