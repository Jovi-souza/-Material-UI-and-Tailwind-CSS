import * as Collapsible from '@radix-ui/react-collapsible';
import { styled } from './styles/stitches.config';

export const Container = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: "translate(-50%, -50%)"
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "center",

  width: "20rem",

  "& h2": {
    fontWeight: 'bolder',
    letterSpacing: "2px",
    color: "$Purple",
  }
})

export const Root = styled(Collapsible.Root, {
  display: "flex",
  flexDirection: 'column',
  gap: "1rem"
})

export const ContentsConteiner = styled(Collapsible.Content, {
  display: "flex",
  flexDirection: 'column',
  gap: "1.5rem"
})

export const Content = styled(Collapsible.Content, {
  backgroundColor: '$grayOne',
  color: '$grayFour',
  borderBottom: "1px solid $grayThree",
  padding: '.75rem 1.5rem',
  borderRadius: '5px'
})

export const Trigger = styled(Collapsible.Trigger, {
  borderRadius: '100%',
  padding: ".5rem .75rem",
  borderColor: "$PurpleDark",

  "& svg" :{
    height: "max-content",
    width: "max-content",
  }
})