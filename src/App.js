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
        description: "some descriptive text" 
      },
      {
        name: "Only You Can Prevent Forest Fires",
        img: "game.jpg",
        description: "some descriptive text" 
      },
      {
        name: "Chat Room",
        img: "talking.jpg",
        description: "some descriptive text" 
      },
      {
        name: "SketchPad",
        img: "sketch.jpg",
        description: "some descriptive text" 
      },
      {
        name: "Airflow Pipelines",
        img: "pipes.jpg",
        description: "some descriptive text" 
      },
      {
        name: "Image Tagging",
        img: "tags.jpg",
        description: "some descriptive text" 
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
