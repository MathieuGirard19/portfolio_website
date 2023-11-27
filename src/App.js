import './App.css';
import NavBar from './components/NavBar' 
import React from 'react';
import CustomCard from './components/CustomCard'
import { Grid, Box } from '@mui/material';
import projectJson from './data/project.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div id="home" className='home'>
          <div className='home-text-container'>
            <h1>Mathieu Girard</h1>
            <h2>Software Developer</h2>
            <p>
              Welcome, to my portfolio page! 
              My name is Mat and I am a software engineering new grad beginning my career in software development.
              I am a highly inquisitive and motivated individual that is always looking to grow as developer.
            </p>
          </div>
        </div>
        <Box id="projects" className='projects'>
          <Grid container spacing={2} sx={{ marginTop: 10, marginBottom: 10, width: "80%"}}>
              {projectJson.map((project, index) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <CustomCard project={project}/>
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
