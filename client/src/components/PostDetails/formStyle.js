import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '90%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#598da6',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#5d6e7a',
    }
  },
  buttonClear : {
    backgroundColor: '#ea9b80',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#5d6e7a',
    }
  },
}));