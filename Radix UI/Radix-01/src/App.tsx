import { GlobalCss } from "./styles/GlobalStyles";
import { Container, StyledContent, StyledHeader, StyledItem, StyledTrigger } from "./styles";
import * as Accordion from '@radix-ui/react-accordion';

export function App() {

  return (
    <Container>
      <Accordion.Root type="multiple">
        <StyledItem value="item-1">
          <StyledHeader>
            <StyledTrigger>
              Testando Material UI Radix 1
            </StyledTrigger>
          </StyledHeader>
          <StyledContent>
            conteúdo
          </StyledContent>
        </StyledItem>
        <StyledItem value="item-2">
          <StyledHeader>
            <StyledTrigger>
              Testando Material UI Radix 2
            </StyledTrigger>
          </StyledHeader>
          <StyledContent>
            conteúdo
          </StyledContent>
        </StyledItem>
      </Accordion.Root>
      {GlobalCss()}
    </Container>
  )
}
