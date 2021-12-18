import {
  FooterLayout,
  FooterTitle,
  FooterLinkBox,
  FooterParagraph,
  LandingTextLinkBoxItem,
} from "../components/style";
import { SiDiscord, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <FooterLayout>
      <FooterTitle>Xeno</FooterTitle>
      <FooterLinkBox>
        <LandingTextLinkBoxItem href="http://discord.gg">
          <SiDiscord color="white"></SiDiscord>
        </LandingTextLinkBoxItem>
        <LandingTextLinkBoxItem href="http://twitter.com">
          <SiTwitter color="white"></SiTwitter>
        </LandingTextLinkBoxItem>
      </FooterLinkBox>
      <FooterParagraph>2021 — Xeno, All Rights Reserved</FooterParagraph>
    </FooterLayout>
  );
}
