import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CustomCard({project}) {
  return (
    <Card sx={{marginTop: 3, marginBottom: 3}}>
      <CardActionArea href={project['github']}>
        <CardMedia
          sx={{ height: 200 }}
          image={project['img']}
          title={project['name']}
        />
        <CardContent sx={{ height: 200 }}>
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
      </CardActionArea>
    </Card>
  );
}