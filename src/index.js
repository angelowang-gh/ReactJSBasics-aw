import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/Header';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MainContent from './MainContent/MainContent';
import Weather from './Weather/Weather';
import AdvanceData from './AdvanceData/AdavanceData';
import BasicComponent from './BasicComponent/BasicComponent';
import * as serviceWorker from './serviceWorker';
import KnowFlux from './Flux/KnowFlux';
import MonkeyController from './Flux/MonkeyController'
import MonkeyView from './Flux/MonkeyView';
// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Resume/>, document.getElementById('root')); // This way we can render the element
const MainPage = () => {
  const data = {
    name: "Swapnil Satish Shinde",
    rollno: "117A1076",
    imgurl: "https://avatars3.githubusercontent.com/u/37082605?s=460&v=4"
  };
  const mainPage = (
    <div>
      <Header />
      <br />
      <ProfileHeader {...data} />
      <br />
      <MainContent {...data} />
      <br />
      <Weather/>
      <br />
      <AdvanceData/>
      <br />
      <App/>
      <br />
      <BasicComponent />
      <br />
      <KnowFlux />
      <br />
      <MonkeyController/>
      <br />
      <MonkeyView />
      <br />
    </div>
  );

  return mainPage;
};

ReactDOM.render(<MainPage />, document.getElementById("root")); // This way we can render the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
