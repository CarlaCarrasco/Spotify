import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Button from '@material-ui/core/Button';

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
      height: 450,
    },
  }));

export default function ArtistProfile({selectedArtist, setArtistId}) {
    console.log(selectedArtist.images.url);
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
            <h1>{selectedArtist.name}</h1>
            <h4>{selectedArtist.followers.total} Followers</h4>
        </div>
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {selectedArtist.images.map((image) => (
          <ImageListItem key={1} cols={image.cols || 1}>
            <img src={image.url} alt={selectedArtist.name} />
          </ImageListItem>
        ))}
      </ImageList>
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
