import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 50,
    // borderRadius: 20,
    overflow: 'hidden',
  },
}));
