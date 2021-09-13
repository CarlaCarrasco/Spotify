import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import { Credentials } from './Credentials';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";
import PhotosButton from './PhotosButton';

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
    },
    imageList: {
      width: 500,
      height: 300,
    },
  }));

export default function ArtistProfile({artistId, selectedArtist, setArtistId}) {
  const spotify = Credentials();  
  const [token, setToken] = useState('');  
  const [artistAlbums, setArtistAlbums] = useState([]);
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
      setToken(tokenResponse.data.access_token);
      axios(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=9`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then(data => {
        setArtistAlbums(data.data.items)
        console.log(artistAlbums);
      })
    });

  },[spotify.ClientId, spotify.ClientSecret]); 

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

  const options = {
    buttons:{
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false
    }
    
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
            <h1>{selectedArtist.name}</h1>
            <h4>{selectedArtist.followers.total} Followers</h4>
        </div>
        <div>
          <h4>Top Tracks</h4>
          {topTracks.map((track, i) => (
            <div key={i}>{i+1}. {track.name}</div>
          ))}
        </div>
        <SimpleReactLightbox>
              <PhotosButton />
          <SRLWrapper options={options}>
            <h4>Albums</h4>
            <ImageList rowHeight={200} className={classes.imageList} cols={3}>
            {artistAlbums.map((album, i) => (
              <ImageListItem key={i}>
                <img src={album.images[0].url} alt={selectedArtist.name} />
                <ImageListItemBar
                  title={album.name}
                  subtitle={<span>Release Date: {album.release_date}</span>}
                />
              </ImageListItem>
            ))}
          </ImageList>
          </SRLWrapper>

        </SimpleReactLightbox>


      <Button className={classes.button} variant="outlined" color="primary" size="small"
          onClick={() => {
                          setArtistId(undefined)
                      }}
        > 
          Back
        </Button>


    </div>
  );
}
