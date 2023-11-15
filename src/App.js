import './App.css';
import NavBar from './components/NavBar' 
import React from 'react';
import CustomCard from './components/CustomCard'

class App extends React.Component {
  render() {
    let projects = [
      {
        name: "Residental Energy Performance Rating",
        img: "energy.jpg",
        description: "My groups capstone project which provides an intuitive and quantitative metric to evaluate the energy efficiency of residential homes.",
        github: "https://github.com/jsong336/REPR"
      },
      {
        name: "Only You Can Prevent Forest Fires",
        img: "game.jpg",
        description: "A 2D survival platform game where the user has to prevent a forest fire from spreading out of control for as long as possible",
        github: "https://github.com/jsong336/REPR"
      },
      {
        name: "Chat Room",
        img: "talking.jpg",
        description: "A Chat Room that my group developed as part of our OS class which could handle multiple simulataneous users sending messages at any point in time" 
      },
      {
        name: "US Map Game",
        img: "map.jpg",
        description: "A simple game that tests the knowledge of users by having them label every US state" 
      },
      {
        name: "Airflow Pipelines",
        img: "pipes.jpg",
        description: "As part of my role I have developed multiple pipelines that automate our workflow" 
      },
      {
        name: "Image Tagging",
        img: "tags.jpg",
        description: "An internal tool that I created that allows users to tag images which will eventually be used to train our models" 
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
        <div className='projects'>
          <div className='projects-container'>
            {projects.map((project, index) => (
              <CustomCard 
                img={project['img']}
                name={project['name']}
                description={project['description']}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
