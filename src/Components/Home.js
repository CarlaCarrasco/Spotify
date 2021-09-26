import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';

const Home = ({setDicover}) => {
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

        <div>
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
