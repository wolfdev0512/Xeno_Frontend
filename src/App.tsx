import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Mint from "./components/Mint";
import Nft from "./components/Nft";
import ItemDiv from "./components/ItemDiv";
import { Rareblock } from "./components/style";

function App() {
  return (
    <div>
      <Header />
      <Landing></Landing>
      <Mint></Mint>
      <Rareblock src="assets/rareblock.png"></Rareblock>
      <Nft></Nft>

      <ItemDiv></ItemDiv>

      <Footer />
    </div>
  );
}

export default App;
