import { CheckboxItem, Container, Content, Item, Label, Root, Sub, SubContent, SubTrigger, Trigger } from "./styles";
import { GlobalCss } from "./styles/GlobalStyles";
import {CaretRight, SignOut, Check} from 'phosphor-react'
import { useState } from "react";
import { ContextMenuGroup, ContextMenuItemIndicator } from "@radix-ui/react-context-menu";

export function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <Container>
      <Root>
        <Trigger>Clique com o botão dereito aqui</Trigger>
        <Content>
          <Item>
            voltar <SignOut size={12} weight="bold" />
          </Item>
          <Item>
            item de testes
          </Item>
          <Sub>
            <SubTrigger>
             More tools <CaretRight size={12} weight="bold" />
            </SubTrigger>
            <SubContent sideOffset={15} hideWhenDetached={true}>
              <Item>
              save
              </Item>
              <Item>
                delete
              </Item>
              <Item>
                edit
              </Item>
            </SubContent>
          </Sub>

          <ContextMenuGroup>
            <Label>
              items aleatorios
            </Label>
            <Item>
              item alatorio 1
            </Item>
            <Item>
              item alatorio 2
            </Item>
          </ContextMenuGroup>
          <Label>
            check items
          </Label>
          <CheckboxItem
            checked={checked1}
            onCheckedChange={setChecked1}
          >
            <ContextMenuItemIndicator>
              <Check size={12} weight="bold" />
            </ContextMenuItemIndicator>
              item indicado 1
          </CheckboxItem>
          <CheckboxItem
            checked={checked2}
            onCheckedChange={setChecked2}
          >
            <ContextMenuItemIndicator>
              <Check size={12} weight="bold" />
            </ContextMenuItemIndicator>
              item indicado 2
          </CheckboxItem>
        </Content>
      </Root>
      {GlobalCss()}      
    </Container>
  )
}

