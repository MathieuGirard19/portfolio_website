import './App.css';
import NavBar from './components/NavBar' 
import React from 'react';
import CustomCard from './components/CustomCard'
import { Grid, Box } from '@mui/material';

class App extends React.Component {
  render() {
    let projects = [
      {
        name: "Residental Energy Performance Rating",
        img: "energy.jpg",
        description: "My groups capstone project which provides an intuitive and quantitative metric to evaluate the energy efficiency of residential homes.",
        tech: ['React', 'JavaScript', 'Python', 'HTML'],
        github: "https://github.com/jsong336/REPR"
      },
      {
        name: "Only You Can Prevent Forest Fires Game",
        img: "game.jpg",
        description: "A 2D survival platform game where the user must prevent a forest fire from spreading out of control for as long as many rounds as possible",
        tech: ['Unity', 'C#'],
        github: "https://github.com/jsong336/REPR"
      },
      {
        name: "Chat Room",
        img: "talking.jpg",
        description: "A Chat Room that my group developed as part of our OS class which could handle multiple simulataneous users sending messages at any point in time", 
        tech: ['C++'],
        github: "https://github.com/MathieuGirard19/ChatRoom"
      },
      {
        name: "US Map Game",
        img: "map.jpg",
        tech: ['JS', 'JQuery', 'HTML'],
        description: "A simple game that tests the knowledge of users by having them label every US state in a random order using a US map visual",
        github: 'https://github.com/MathieuGirard19/map_game'
      },
      {
        name: "Airflow Pipelines",
        img: "pipes.jpg",
        tech: ['Python', 'Airflow'],
        description: "As part of my role I have developed multiple pipelines that automate our workflow",
        github: ''
      },
      {
        name: "Image Tagging",
        img: "tags.jpg",
        description: "An internal tool that I created that allows users to tag images which will eventually be used to train our models",
        tech: ['Vue', 'TypeScript'],
        github: ''
      },
    ]
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <div className='main-text-container'>
            <h1>Mathieu Girard</h1>
            <h2>Software Developer</h2>
            <p>
              Welcome, to my portfolio page! 
              My name is Mat and I am a software engineering new grad beginning my career in software development.
              I am a highly inquisitive and motivated individual that is always looking to grow as developer.
            </p>
          </div>
        </div>
        <Box className='projects'>
          <Grid container spacing={2} sx={{ marginTop: 10, marginBottom: 10, width: "80%"}}>
              {projects.map((project, index) => (
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
