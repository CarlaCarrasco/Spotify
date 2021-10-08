import React, {useState, useEffect} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 345,
        backgroundColor: '#424242',
        color: '#fff',
        border: '1px solid #424242'
    },
    media: {
        height: 200,
    },
});



const CategoryList = ({ token, selectedArtist, setSelectedArtist, play, artistData, categoriesData, setIdsURL }) => {
    const classes = useStyles();
    const [artists, setArtists] = useState([]);
    const [playlistId, setPlaylistId] = useState();

    
    const goToProfile = (category) => {
        console.log(category.name);
        token.then(tokenResponse => {      
            axios(`https://api.spotify.com/v1/browse/categories/${category.id}/playlists?country=US&limit=20&offset=0`, {
              method: 'GET',
              headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
            }).then(data => {
                const arr = data.data.playlists.items
                setPlaylistId(arr[Math.floor(Math.random() * arr.length)].id);
            })
        }).then(() => {
            token.then(tokenResponse => {      
                axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=US&fields=items(track(name%2Chref%2Calbum(name%2Chref%2Cartists)))&limit=24&offset=0`, {
                  method: 'GET',
                  headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
                }).then(data => {
                    console.log(data);
                    const playlistArtist = data.data.items.map((track) => track.track.album.artists[0].id)
                    let ids = ''
                    playlistArtist.forEach(i => {
                        ids+= i + '%2C' 
                    })
                    setIdsURL(ids.slice(0, -3))
                })
              }).catch((err => console.log(err)));
            }).catch((err => console.log(err)))
        
}

    return (
        <div className='artist-list'>
          {
            categoriesData.map((category, index) => (
                <Card className={classes.root} key={index} variant="outlined">
                    <CardActionArea
                      onClick={() => {
                            goToProfile(category)
                        }}>
                        <CardMedia
                        className={classes.media}
                        image={category.icons[0].url}
                        title={category.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            {category.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )) 
            }
      </div>
    );
}

export default CategoryList;
