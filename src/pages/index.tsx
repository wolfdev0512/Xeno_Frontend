import React from "react";
import Landing from "../sections/Landing";
import Mint from "../sections/Mint";
import Nft from "../sections/Nft";
import ItemDiv from "../sections/ItemDiv";
import { Rareblock } from "../components/style";

function Homepage() {
  return (
    <>
      <Landing></Landing>
      <Mint></Mint>
      <Nft></Nft>
      <ItemDiv></ItemDiv>
      <Rareblock src="assets/rareblock.png"></Rareblock>
    </>
  );
}

export default Homepage;
