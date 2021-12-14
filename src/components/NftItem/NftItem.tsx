import { NftItemImage } from "../style";
type NftItemProps = {
  datatext: string;
};

export default function NftItem({ datatext }: NftItemProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <NftItemImage src={datatext}></NftItemImage>
  );
}
