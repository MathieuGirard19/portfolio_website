import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CustomCard({name, img, description}) {
  return (
    <Card sx={{width: 400, marginTop: 3, marginBottom: 3}}>
      <CardMedia
        sx={{ height: 200 }}
        image={process.env.PUBLIC_URL + '/images/' + img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <GitHubIcon fontSize="large" sx={{ color: 'black' }}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}