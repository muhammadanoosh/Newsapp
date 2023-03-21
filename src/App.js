import './App.css';
import React, {useState} from 'react'
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
 const pageSize = 15;
 const [progress, setProgress] = useState(0)
  // apiKey = '9f11cd48280046ee987cef55d4a883bc';
    return (

      <>
        <div>
          <BrowserRouter>
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />

         <NavBar/>
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress}   pageSize={pageSize} key='general' category='general' country='us' />} />
              <Route exact path="/business" setProgress={setProgress} element={<News  pageSize={pageSize} key='business' category='business' country='us' />} />
              <Route exact path="/entertainment" setProgress={setProgress} element={<News  pageSize={pageSize} key='entertainment' category='entertainment' country='us' />} />
              <Route exact path="/health" setProgress={setProgress} element={<News  pageSize={pageSize} key='health' category='health' country='us' />} />
              <Route exact path="/sports" setProgress={setProgress} element={<News  pageSize={pageSize} key='sports' category='sports' country='us' />} />
              <Route exact path="/technology" setProgress={setProgress} element={<News  pageSize={pageSize} key='technology' category='technology' country='us' />} />

            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
}

export default App;