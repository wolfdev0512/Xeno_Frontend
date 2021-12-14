import {
  FooterLayout,
  FooterTitle,
  FooterLinkBox,
  FooterParagraph,
} from "./style";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterLayout>
      <FooterTitle>Xeno</FooterTitle>
      <FooterLinkBox>
        <AiFillTwitterCircle></AiFillTwitterCircle>
        <AiFillTwitterCircle></AiFillTwitterCircle>
      </FooterLinkBox>
      <FooterParagraph>2021 — Dirty Dogs, All Rights Reserved</FooterParagraph>
    </FooterLayout>
  );
}
