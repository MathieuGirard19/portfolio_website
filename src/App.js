import './App.css';
import NavBar from './components/NavBar' 

function App() {
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
    </div>
  );
}

export default App;
