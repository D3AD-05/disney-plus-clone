import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


function App() {



  return (
    <div>
      {/* <span>App Component</span> */}
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
                    
          {/* <Route exact path="/" element={} /> */}


        </Routes>
      </Router>




    </div>

  );
}

export default App;
