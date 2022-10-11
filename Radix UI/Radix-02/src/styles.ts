import { styled } from "./styles/stitches.config";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const Container = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const Trigger = styled(AlertDialog.AlertDialogTrigger,{
  color: "$PurpleDark",
  padding: '1rem 2rem',
  fontSize: "1.5rem",
  fontWeight: "bolder",
  letterSpacing: "1px"
})

export const Content = styled(AlertDialog.AlertDialogContent,{
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',

  width: "80vw",

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: 'white',
  padding: '1rem 2rem',
  borderRadius: "5px",

  '& div': {
    display: 'flex',
    gap: '.75rem',
    justifyContent: 'flex-end'
  }
})

export const Title = styled(AlertDialog.Title,{
  color: "$Purple",
  fontSize: '3.5rem'
})

export const Description = styled(AlertDialog.AlertDialogDescription,{
  color: '$graySeven',
  fontSize: '2rem'
})

export const Cancel = styled(AlertDialog.AlertDialogCancel,{
  color: "$graySeven",
  backgroundColor: "$grayOne",
  padding: '.25rem 1.25rem',
  borderColor: '$PurpleDark',
  borderRadius: "5px"
})

export const Action = styled(AlertDialog.AlertDialogCancel,{
  color: "$danger",
  backgroundColor: "$grayOne",
  padding: '.25rem 1.25rem',
  borderColor: '$danger',
  borderRadius: "5px"
})