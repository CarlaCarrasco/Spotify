import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});



const Home = ({setDicover}) => {
  const classes = useStyles();

  return (
        <main className="container">
        <header className="header">
        <div className="overlay"></div>
        </header>
        <div className="content">
        <h1>
            Discover new <span className="accent">MUSIC</span> here.
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore dolorem, repellat maiores cumque!
        </p>

        <div class="proof">
            <Button onClick={() => setDicover(true)} 
        variant="outlined" color="inherit" size="medium">
            Discover Music
        </Button>
        </div>
        </div>
    </main>
  );
}

export default Home;
