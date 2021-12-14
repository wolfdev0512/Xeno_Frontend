import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 30px 40px 20px 40px;
`;

export const HeaderTitle = styled.div`
  font-family: Lobster;
  font-size: 50px;
`;
export const HeaderMenu = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;
export const HeaderMenuItem = styled.a`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`;

export const LandingLayout = styled.div`
  display: flex;
  background-image: linear-gradient(
    to bottom left,
    rgb(111, 19, 204),
    rgb(243, 20, 194)
  );
  align-items: end;
  height: 60vh;
`;
export const LandingImage = styled.div`
  flex: 1;
`;
export const LandingImageTag = styled.img`
  width: 100%;
  height: auto;
`;
export const LandingText = styled.div`
  flex: 1;
`;
export const LandingTextPara1 = styled.div`
  font-family: "Roboto Mono", sans-serif;
  color: rgb(243, 20, 194);
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;
export const LandingTextPara2 = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 4rem;
  line-height: 4.5rem;
  font-weight: 900;
`;
export const LandingTextPara3 = styled.div`
  font-family: "Roboto Mono", sans-serif;
  font-size: 18px;
  line-height: 28px;
`;
export const LandingTextButtonBox = styled.div`
  display: flex;
`;
export const LandingTextButtonBoxItem = styled.div`
  background-color: rgb(252, 212, 36);
  font-weight: 500;
  color: rgb(35, 36, 37);
  margin: 10px;
  padding: 20px 38px;
  border-radius: 40px;
`;

export const LandingTextLinkBox = styled.div`
  display: flex;
`;
export const LandingTextLinkBoxItem = styled.a`
  font-weight: 500;
  font-size: 40px;
  margin: 20px;
`;

export const MintLayout = styled.div`
  display: flex;
`;
export const MintText = styled.div`
  flex: 1;
`;
export const MintTextPara1 = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 48px;
  line-height: 56px;
  font-weight: 900;
`;
export const MintTextPara2 = styled.div`
  font-family: "Roboto Mono", sans-serif;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 30px;
`;
export const MintDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MintDivTitle = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 48px;
  line-height: 56px;
  font-weight: 900;
`;
export const MintDivButton = styled.button`
  width: 70%;
  background-color: rgb(35, 36, 37);
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 20px 38px;
  border-radius: 40px;
  margin: 5px;
`;
export const MintDivLabel = styled.div`
  font-family: "Roboto Mono", sans-serif;
  color: rgb(99, 99, 156);
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;
export const MintDivInput = styled.input`
  padding-left: 14px;
  border-radius: 20px;
  font-size: 14px;
  width: 60%;
  padding: 20px;
  border-radius: 40px;
`;

export const NftLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
export const NftItemImage = styled.img`
  width: 100%;
`;

export const ItemDivLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemDivImage = styled.img`
  width: 20%;
`;
export const ItemDivTitle = styled.div``;
export const ItemDivPara = styled.div``;
export const Rareblock = styled.img`
  width: 100%;
`;
export const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FooterTitle = styled.div``;

export const FooterLinkBox = styled.div`
  display: flex;
`;
export const FooterParagraph = styled.div`
  font-family: Arial, sans-serif;
`;
