import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

const App =()=> {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  

  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                key="general"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                key="business"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                key="entertainment"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                key="general"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                key="health"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                key="science"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                key="sports"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                key="technology"
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;


