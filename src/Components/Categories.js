import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../App.css';
import Search from './Search';
import CategoryList from './CategoryList';
import { Credentials } from './Credentials';

const Categories = ({token, selectedArtist, setSelectedArtist, artistId, setPlaylistId, artistData, setArtistData, allArtists, setIdsURL}) => {
    const spotify = Credentials();  
    const [categories, setCategories ] = useState([])

    console.log('Categories component')

    useEffect(() => {
        token.then(tokenResponse => {      
          axios(`https://api.spotify.com/v1/browse/categories?country=US&limit=24&offset=2`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
          }).then(data => {
            setCategories(data.data.categories.items)
          })
        });
    
      },[spotify.ClientId, spotify.ClientSecret]); 

  return (
      <div>
        <div className="flex">
            <h1>Browse Categories</h1>
            <Search artistData={artistData} setArtistData={[]}/>
        </div>
          <CategoryList token={token} selectedArtist={selectedArtist} setSelectedArtist={setSelectedArtist} artistId={artistId} categoriesData={categories} setIdsURL={setIdsURL}/>
    </div>
  );
}

export default Categories;
