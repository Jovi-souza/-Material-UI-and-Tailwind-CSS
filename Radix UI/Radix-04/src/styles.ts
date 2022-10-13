import * as ContextMenu from '@radix-ui/react-context-menu';
import { styled } from "./styles/stitches.config";

export const Container = styled('div', {
  display: "flex",
  verticalAlign: 'middle',
  justifyContent: "center",
  marginTop: "50vh"
})

export const Root = styled(ContextMenu.Root, {
  
})

export const Content = styled(ContextMenu.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: "1rem",
  width: "20rem",
  backgroundColor: "$grayOne",
  position: "absolute",
  padding: "1rem",
  fontSize: "1.5rem",
  borderRadius: '5px'
})

export const Label = styled(ContextMenu.Label, {
  color: "$grayThree"
})

export const Item = styled(ContextMenu.Item, {
  display: 'flex',
  alignItems: "center",
  justifyContent: 'space-between',
  color: "$PurpleDark",
  padding: ".5rem .75rem",
  borderRadius: "5px",
  width: '100%',

  "&:hover": {
    backgroundColor: "$Purple",
    color: 'White',
    outline: '1px solid transparent',
  }
})

export const Trigger = styled(ContextMenu.Trigger, {
  color: "$grayOne",
  border: '2px dashed $grayOne',
  borderRadius: '5px',
  padding: '3rem',
  fontSize: '1.5rem',
})

export const SubTrigger = styled(ContextMenu.SubTrigger, {
  display: 'flex',
  alignItems: "center",
  justifyContent: 'space-between',
  color: "$PurpleDark",
  padding: ".5rem .75rem",
  borderRadius: "5px",
  width: '100%',

  "&:hover": {
    backgroundColor: "$Purple",
    color: 'White',
    outline: '1px solid transparent',
  }
})

export const CheckboxItem = styled(ContextMenu.CheckboxItem, {
  display: 'flex',
  alignItems: "center",
  gap: ".5rem",
  color: "$PurpleDark",
  padding: ".5rem .75rem",
  borderRadius: "5px",
  width: '100%',

  "&:hover": {
    backgroundColor: "$Purple",
    color: 'White',
    outline: '1px solid transparent',
  }
})

export const Sub = styled(ContextMenu.Sub, {
  backgroundColor: '$grayOne',
  width: "10rem"
})

export const SubContent = styled(ContextMenu.SubContent, {
  backgroundColor: '$grayOne',
  width: "10rem",
  height: "max-content",
  padding: "1rem",
})
