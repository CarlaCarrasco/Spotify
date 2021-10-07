import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Artists from './Components/Artists';
import Profile from './Components/Profile'
import { Credentials } from './Components/Credentials';
import Home from './Components/Home';
function App() {

  const spotify = Credentials();  
  const [artistId, setArtistId] = useState();
  const [selectedArtist, setSelectedArtist] = useState();
  const [artistData, setArtistData] = useState([]);
  const [discoverClicked, setDicover] = useState(false);
  const token = axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  });

  useEffect(() => {
    
    token.then(tokenResponse => {      
      axios('https://api.spotify.com/v1/artists?ids=4XquDVA8pkg5Lx91No1JxB%2C75dQReiBOHN37fQgWQrIAJ%2C4mLJ3XfOM5FPjSAWdQ2Jk7%2C6gK1Uct5FEdaUWRWpU4Cl2%2C1fZpYWNWdL5Z3wrDtISFUH%2C69tiO1fG8VWduDl3ji2qhI%2C4C50EbCS11M0VbGyH3OfLt%2C1xLMexpeeTKQ20SwGMaGSK%2C24V5UY0nChKpnb1TBPJhCw%2C3pTE9iaJTkWns3mxpNQlJV%2C44insiIQApkRaCMIbuaISJ%2C4ETSs924pXMzjIeD6E9b4u', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then(data => {
        setArtistData(data.data.artists)
      })
    });

  }, [spotify.ClientId, spotify.ClientSecret]); 

  const allArtists = [...artistData];

  return ( discoverClicked ? 
            artistId ? <Profile token={token} selectedArtist={selectedArtist} artistId={artistId} setArtistId={setArtistId}/> 
              : <Artists selectedArtist={selectedArtist} 
                setSelectedArtist={setSelectedArtist} 
                artistId={artistId} setArtistId={setArtistId} 
                artistData={artistData} setArtistData={setArtistData} allArtists={allArtists}/>
          :<Home setDicover={setDicover}/>)

}

export default App;

