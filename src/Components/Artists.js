import React from 'react';
import '../App.css';
import Search from './Search';
import ArtistList from './ArtistList';

const Artists = ({selectedArtist, setSelectedArtist, artistId, setArtistId, artistData, setArtistData, allArtists}) => {

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
