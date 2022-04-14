import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
  },
  show: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing(3),
  },
}));
