
import { styled } from './styles/stitches.config';
import * as Accordion from '@radix-ui/react-accordion';

export const Container = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const StyledItem = styled(Accordion.Item, {
  width: '20rem',
  height: 'max-content',
});

export const StyledHeader = styled(Accordion.Header, {
  width: '100%',
});

export const StyledContent = styled(Accordion.Content, {
  width: '100%',
  backgroundColor: '$grayOne',
  padding: '1rem 2rem',
  color: '$Purple'
});

export const StyledTrigger = styled(Accordion.Trigger, {
  width: "100%",
  backgroundColor: '$grayOne',
  border: "1px solid $grayTwo",
  padding: '1rem',
  color: '$PurpleDark'
});