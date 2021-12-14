/* eslint-disable jsx-a11y/alt-text */
import {
  LandingLayout,
  LandingImage,
  LandingImageTag,
  LandingText,
  LandingTextPara1,
  LandingTextPara2,
  LandingTextPara3,
  LandingTextButtonBox,
  LandingTextLinkBox,
  LandingTextButtonBoxItem,
  LandingTextLinkBoxItem,
} from "../components/style";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

export default function Landing() {
  return (
    <>
      <LandingLayout id="main">
        <LandingImage>
          <LandingImageTag src="assets/header-banner.png"></LandingImageTag>
        </LandingImage>
        <LandingText>
          <LandingTextPara1>Welcome to the</LandingTextPara1>
          <LandingTextPara2>The Xeno Project</LandingTextPara2>
          <LandingTextButtonBox>
            <LandingTextButtonBoxItem href="#mint">
              Claim Xeno
            </LandingTextButtonBoxItem>
            <LandingTextButtonBoxItem href="https://discord.gg">
              Join Discord
            </LandingTextButtonBoxItem>
          </LandingTextButtonBox>
          <LandingTextPara3>
            The Xeno Project is 5,000 randomly generated Aliens living on the
            Ethereum Blockchain. Each one is thoughtfully designed and ready for
            a mission back to space.
          </LandingTextPara3>
          <LandingTextLinkBox>
            <LandingTextLinkBoxItem href="http://discord.gg">
              <SiDiscord color="white"></SiDiscord>
            </LandingTextLinkBoxItem>
            <LandingTextLinkBoxItem href="http://twitter.com">
              <BsTwitter color="white"></BsTwitter>
            </LandingTextLinkBoxItem>
          </LandingTextLinkBox>
        </LandingText>
      </LandingLayout>
    </>
  );
}
