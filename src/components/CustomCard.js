import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustomCard({name, img, description}) {
  return (
    <Card sx={{width: 400, marginBottom: 5}}>
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
        <Button size="small">Project</Button>
      </CardActions>
    </Card>
  );
}