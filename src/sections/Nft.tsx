import { NftLayout } from "../components/style";
import NftItem from "../components/NftItem/NftItem";

export default function Nft() {
  return (
    <NftLayout id="about">
      <NftItem datatext="assets/nfts/mine.jpg"></NftItem>
      <NftItem datatext="assets/nfts/one.jpg"></NftItem>
      <NftItem datatext="assets/nfts/three.jpg"></NftItem>
      <NftItem datatext="assets/nfts/five.jpg"></NftItem>
      <NftItem datatext="assets/nfts/six2.jpg"></NftItem>
      <NftItem datatext="assets/nfts/eight.jpg"></NftItem>
    </NftLayout>
  );
}
