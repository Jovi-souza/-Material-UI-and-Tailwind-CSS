import * as Dialog from '@radix-ui/react-dialog';
import * as Label from '@radix-ui/react-label';

import { styled } from './styles/stitches.config';

export const Container = styled('div', {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
})

export const Root = styled(Dialog.Root, {
})

export const Trigger = styled(Dialog.Trigger, {
  backgroundColor: '$Purple',
  color: '$grayOne',
  border: '1px solid $grayOne',
  borderRadius: '5px',
  padding: '.5rem 1rem'
})

export const Portal = styled(Dialog.Portal, {
  
})

export const Content = styled(Dialog.Content, {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  backgroundColor: "white",
  width: "40rem",
  padding: "2rem 2rem",
  borderRadius: "5px",

  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }
})

export const Title = styled(Dialog.Title, {
  fontSize: "2rem",
  color: "$grayFive"
})

export const Description = styled(Dialog.Description, {
  fontSize: "1.5rem",
  color: "$grayThree"
})

export const Close = styled(Dialog.Close, {
  width: "max-content",
  backgroundColor: "$danger",
  color: "$grayOne",
  padding: ".25rem 1rem",
  borderRadius: "5px",
  border: '1px solid $grayFour',
})

export const LabelRoot = styled(Label.Root, {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "30rem",
  fontSize: "1.5rem",
  color: '$Purple'
})

export const Input = styled('input', {
  width: "80%",
  padding: '.5rem 1rem',
  border: '1px solid $Purple',
  borderRadius: '5px',

  "&::placeholder": {
    color: "$PurpleDark"
  },
})