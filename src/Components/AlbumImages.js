import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import { Credentials } from './Credentials';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";
import PhotosButton from './PhotosButton';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



const AlbumImages = ({artistId }) => {
  const classes = useStyles();
  const [artistAlbums, setArtistAlbums] = useState([]);
  const spotify = Credentials();  
  const options = {
    buttons:{
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false
    }
  }

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
      axios(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=9`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then(data => {
        setArtistAlbums(data.data.items)
      })
    });

  },[spotify.ClientId, spotify.ClientSecret]); 

  return (
    <SimpleReactLightbox>
    <div className="flex-album">
      <h4 className="h4-album">Albums</h4>
      <PhotosButton />
    </div>
    <SRLWrapper options={options}>
      <ImageList rowHeight={200} className={classes.imageList} cols={3} gap={8}>
      {artistAlbums.map((album, i) => (
        <ImageListItem key={i}>
          <img src={album.images[0].url} alt={album.name} />
          <ImageListItemBar
            title={album.name}
            subtitle={<span>Release Date: {album.release_date}</span>}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </SRLWrapper>
  </SimpleReactLightbox>
  );
}

export default AlbumImages;
