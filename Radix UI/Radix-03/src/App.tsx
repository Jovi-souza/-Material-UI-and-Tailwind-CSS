import * as Collapsible from '@radix-ui/react-collapsible';
import { X, ArrowsOutLineVertical } from 'phosphor-react'
import { Container, Content, ContentsConteiner, Header, Root, Trigger } from './styles';
import { GlobalCss } from './styles/GlobalStyles';

export function App() {
  return (
    <Container>
      <Root>
        <Header>
          <h2>Aperte o button</h2>
          <Trigger>
            <ArrowsOutLineVertical size={16} weight="light" />
            {/* <X size={32} weight="bold" /> */}
          </Trigger>
        </Header>
        <ContentsConteiner>
          <Content>
            <h1>askdhadl</h1>
          </Content>
          <Content>
            <h1>askdhadl</h1>
          </Content>
          <Content>
            <h1>askdhadl</h1>
          </Content>
        </ContentsConteiner>
      </Root>
      {GlobalCss()}
    </Container>
  )
}

