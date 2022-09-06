import logo from './logo.svg';
import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import TopAnchor from './topAnchor/TopAnchor';
import RollPic from './rollPic/rollPic'
import First from './FirstPage/FirstPage'
import Second from './FirstPage/SecondPage';
// import Third from './FirstPage/ThirdPage'
// import Fourth from './FirstPage/FourthPage'
// import Fifth from './FirstPage/FifthPage'
// import Sixth from './FirstPage/SixthPage'
// import Seventh from './FirstPage/SeventhPage'
// import Eighth from './FirstPage/EighthPage'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //Route for the different websites.
    <Router>
      <Routes>
        <Route path="/" element={<First/>}/>
        {/* <Route path="/searchactivity" element={<Third/>} />
        <Route path="/findhome" element={<Sixth/>} />
        <Route path="/benefits" element={<Seventh/>} /> */}
        {/* <Route path="/contact" element={<Eighth/>} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
