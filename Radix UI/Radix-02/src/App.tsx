import { Action, Cancel, Container, Content, Description, Title, Trigger } from "./styles";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { GlobalCss } from "./styles/GlobalStyles";

export function App() {

  return (
    <Container>
      <AlertDialog.Root>
        <Trigger>
          Delete account
        </Trigger>
        <AlertDialog.Portal>
          <Content>
            <Title>
              Testando o material UI
            </Title>
            <Description>
              Estou parendendo a utilizar o material UI Radix
            </Description>
            <div>
              <Cancel>
                Close
              </Cancel>
              <Action>
                Sim, Delete minha conta
              </Action>
            </div>
          </Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
      {GlobalCss()}
    </Container>
  )
}

