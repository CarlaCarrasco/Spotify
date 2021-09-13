import { useLightbox } from "simple-react-lightbox";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { useLightbox } from 'simple-react-lightbox-pro'

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: 30,
      width: 200
    },

  }));
export default function Buttons() {
  const { openLightbox } = useLightbox();
  const classes = useStyles();

  return (
    <>
      <Button onClick={() => openLightbox()} className={classes.button} variant="outlined" color="primary" size="large">
          View All Albums
      </Button>
    </>
  );
}
