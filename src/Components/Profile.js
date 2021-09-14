import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import { Credentials } from './Credentials';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AlbumImages from './AlbumImages';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
      width: '80vw'
    },
    button: {
      marginTop: 30,
      width: 100
    }
  }));

export default function ArtistProfile({artistId, selectedArtist, setArtistId}) {
  const classes = useStyles();
  const spotify = Credentials();  
  const [topTracks, setTopTracks] = useState([]);  

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      axios(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then(data => {
        setTopTracks(data.data.tracks.slice(0,5))
      })
    });

  },[spotify.ClientId, spotify.ClientSecret]);

  return (
    <div className={classes.root}>
        <div className="artist-header">   
        <div>
          <Button className={classes.button} variant="outlined" 
                color="inherit" size="medium"
                position="right"
                onClick={() => {setArtistId(undefined)}}> 
                Back
            </Button>
          <h1>{selectedArtist.name}</h1>
          <h4>Followers: {selectedArtist.followers.total}</h4>
          <img src={selectedArtist.images[0].url} alt={selectedArtist.name} className="artist-img"/>
        </div>
          <div className="top-tracks">
            <h4>Top Tracks</h4>
            <ol>
              {topTracks.map((track, i) => (
                <li key={i} className="track">{track.name}</li>
              ))}
            </ol>
        </div>
        </div>
        <div className="about-artist">
          <div className="album-photos">
          <AlbumImages artistId={artistId}/>
          </div>
        </div>
    </div>
  );
}
