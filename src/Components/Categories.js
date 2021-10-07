import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../App.css';
import Search from './Search';
import ArtistList from './ArtistList';
import { Credentials } from './Credentials';

const Categories = ({token, selectedArtist, setSelectedArtist, artistId, setArtistId, artistData, setArtistData, allArtists}) => {
    const spotify = Credentials();  
    const [categories, setCategories ] = useState()

    console.log('Categories component')

    useEffect(() => {
        token.then(tokenResponse => {      
          axios(`https://api.spotify.com/v1/browse/categories?country=US&limit=24&offset=2`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
          }).then(data => {
            console.log(data.data.categories.items)
          })
        });
    
      },[spotify.ClientId, spotify.ClientSecret]); 

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

export default Categories;
