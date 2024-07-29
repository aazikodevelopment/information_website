import React from "react";
import "./App.css";
import "./styles/mixins/global.scss";
import Routes from "./routes";
import { Helmet } from "react-helmet";
import ChatBot from "./components/ChatBot";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aaziko</title>
        <meta name="description" content="Welcome to the Biggest Market." />
      </Helmet>
      <div id="second-container">
        <Routes />
        <ChatBot/>
      </div>
     
    </>
  );
}

export default App;
