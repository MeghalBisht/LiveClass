import React from 'react';
import LoginPage from './Components/LoginPage';
import LessonPage from './Components/LessonPage';
import DashBar from './Components/Utilities/DashBar';
import Navbar from './Components/Utilities/NavBar';
import QuizPage from './Components/QuizPage';
import VideoLecturePage from './Components/VideoLecturePage';
import LiveSchedule from './Components/LiveSchedule';
import LiveStream from './Components/LiveStream';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <DashBar />
        {/* <LiveSchedule /> */}
        <QuizPage />
        {/* <LessonPage /> */}
        {/* <LoginPage /> */}
        {/* <VideoLecturePage /> */}
        {/* <LiveStream /> */}
      </Router>
    </div>
  );
}

export default App;
