import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CustomCard({project}) {
  return (
    <Card sx={{height: 450, marginTop: 3, marginBottom: 3}}>
      <CardMedia
        sx={{ height: 200 }}
        image={process.env.PUBLIC_URL + '/images/' + project['img']}
        title={project['name']}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project['name']}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project['tech'].join(', ')}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {project['description']}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          {project['github'] !== '' &&
            <a href={project['github']} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" sx={{ color: 'black' }}/>
            </a>
          }
        </IconButton>
      </CardActions>
    </Card>
  );
}