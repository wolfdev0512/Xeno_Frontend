import {
  ItemDivLayout,
  ItemDivImage,
  ItemDivTitle,
  ItemDivPara,
} from "./style";

export default function ItemDiv() {
  return (
    <ItemDivLayout>
      <ItemDivImage src="assets/nfts/mine.jpg"></ItemDivImage>
      <ItemDivTitle>What Are Xeno NFTS?</ItemDivTitle>
      <ItemDivPara>
        Xeno NFTS are 5,000 randomly generated Aliens from outer space. They're
        mission is take a one way trip To The Moon! Everyone aboard will receive
        future bonuses and dividend payments becoming a part of the Xeno
        community!
      </ItemDivPara>
    </ItemDivLayout>
  );
}
