import { Close, Container, Content, Description, Input, LabelRoot, Portal, Root, Title, Trigger } from "./styles";
import { GlobalCss } from "./styles/GlobalStyles";

export function App() {

  return (
    <Container>
      <Root modal>
        <Trigger>
          Open Dialog
        </Trigger>
        <Portal>
          <Content>
            <Title>
              Testing Radix-UI Dialog
            </Title>
            <Description>
              testing ui material in practice with Radix-UI
            </Description>
            <div>
              <LabelRoot> 
                Nome <Input placeholder="Digite seu nome..."/>
              </LabelRoot>
              <LabelRoot>
                Cidade <Input placeholder="Digite sua Cidade..."/>
              </LabelRoot>
            </div>
            <Close>
              Close
            </Close>
          </Content>
        </Portal>
      </Root>
      {GlobalCss()}
    </Container>
  )
}

