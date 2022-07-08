import React from "react";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { DeliveryScreen } from "./screens/DeliverScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default App;
