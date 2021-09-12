import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Artists from './Components/Artists';
import Profile from './Components/Profile'
import { Credentials } from './Components/Credentials';
import Search from './Components/Search';

function App() {

  const spotify = Credentials();  
  const [artistId, setArtistId] = useState();
  const [selectedArtist, setSelectedArtist] = useState();
  const [artistData, setArtistData] = useState([]);

  const [token, setToken] = useState('');  
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
      axios('https://api.spotify.com/v1/artists?ids=4XquDVA8pkg5Lx91No1JxB%2C75dQReiBOHN37fQgWQrIAJ%2C4mLJ3XfOM5FPjSAWdQ2Jk7%2C6gK1Uct5FEdaUWRWpU4Cl2%2C1fZpYWNWdL5Z3wrDtISFUH%2C69tiO1fG8VWduDl3ji2qhI%2C4C50EbCS11M0VbGyH3OfLt%2C1xLMexpeeTKQ20SwGMaGSK%2C24V5UY0nChKpnb1TBPJhCw%2C3pTE9iaJTkWns3mxpNQlJV%2C44insiIQApkRaCMIbuaISJ%2C4ETSs924pXMzjIeD6E9b4u', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then(data => {
        setArtistData(data.data.artists)

        
      })
    });

  }, [spotify.ClientId, spotify.ClientSecret]); 


  return artistId ? <Profile selectedArtist={selectedArtist} setArtistId={setArtistId}/> : <Artists selectedArtist={selectedArtist} setSelectedArtist={setSelectedArtist} artistId={artistId} setArtistId={setArtistId} artistData={artistData} setArtistData={setArtistData} />;
}

export default App;


// Brittany Howard - 4XquDVA8pkg5Lx91No1JxB
// Local Natives - 75dQReiBOHN37fQgWQrIAJ
// Dr. Dog - 4mLJ3XfOM5FPjSAWdQ2Jk7
// Petite Bisquit - 6gK1Uct5FEdaUWRWpU4Cl2
// Shakey Graves - 1fZpYWNWdL5Z3wrDtISFUH
// Mt. Joy - 69tiO1fG8VWduDl3ji2qhI
// Wild Child - 1xLMexpeeTKQ20SwGMaGSK
// Jai Wolf - 24V5UY0nChKpnb1TBPJhCw
// Bombay Bicycle - 3pTE9iaJTkWns3mxpNQlJV
// Joey P - 44insiIQApkRaCMIbuaISJ
// 4XquDVA8pkg5Lx91No1JxB,75dQReiBOHN37fQgWQrIAJ,4mLJ3XfOM5FPjSAWdQ2Jk7,6gK1Uct5FEdaUWRWpU4Cl2,1fZpYWNWdL5Z3wrDtISFUH,69tiO1fG8VWduDl3ji2qhI,1xLMexpeeTKQ20SwGMaGSK,1xLMexpeeTKQ20SwGMaGSK,24V5UY0nChKpnb1TBPJhCw,3pTE9iaJTkWns3mxpNQlJV,44insiIQApkRaCMIbuaISJ,4ETSs924pXMzjIeD6E9b4u

