import React from 'react';
import '../App.css';
import Search from './Search'
import { makeStyles } from '@material-ui/core/styles';
import ArtistList from './ArtistList';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});



const Artists = ({selectedArtist, setSelectedArtist, artistId, setArtistId, artistData, setArtistData}) => {
  const classes = useStyles();

  console.log(artistData)

  return (
      <div>
        <div className="flex">
            <h1>Artists</h1>
            <Search artistData={artistData} setArtistData={setArtistData}/>
        </div>
          <ArtistList selectedArtist={selectedArtist} setSelectedArtist={setSelectedArtist} artistId={artistId} setArtistId={setArtistId} artistData={artistData} />
    </div>
  );
}

export default Artists;
