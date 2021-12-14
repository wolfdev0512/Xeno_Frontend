import {
  FooterLayout,
  FooterTitle,
  FooterLinkBox,
  FooterParagraph,
} from "../components/style";
import { SiDiscord, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <FooterLayout>
      <FooterTitle>Xeno</FooterTitle>
      <FooterLinkBox>
        <SiDiscord></SiDiscord>
        <SiTwitter></SiTwitter>
      </FooterLinkBox>
      <FooterParagraph>2021 — Xeno, All Rights Reserved</FooterParagraph>
    </FooterLayout>
  );
}
