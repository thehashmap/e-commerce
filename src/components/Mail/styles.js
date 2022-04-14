import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    margin: 15,
    padding: 10,
    borderRadius: 40,
    overflow: 'hidden',
  },
//   media: {
//       maxWidth: '30%',
//       flex: 0.50,
//     // paddingTop: '56.25%', // 16:9
//   },
  cardActions: {
    display: 'flex',
    // flex: 0.5,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  email: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'space-between',
      width: '100%',
    //   margin: 20,
      padding: 20,
  },
  input: {
      flex: 0.7,
      marginRight: 10,
  },
  button: {
      flex: 0.3,
      paddingHorizontal: 50,
  }
}));
