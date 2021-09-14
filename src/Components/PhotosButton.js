import { useLightbox } from "simple-react-lightbox";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: 30,
      width: 200,
      alignSelf: 'flex-end'
    },

  }));
export default function Buttons() {
  const { openLightbox } = useLightbox();
  const classes = useStyles();

  return (
    <>
      <Button onClick={() => openLightbox()} className={classes.button} variant="outlined" color="primary" size="medium">
          View All Albums
      </Button>
    </>
  );
}
