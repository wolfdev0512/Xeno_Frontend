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
  padding: 70px 50px 0px 50px;
`;
export const LandingImage = styled.div`
  flex: 1;
  font-size: 0;
`;
export const LandingImageTag = styled.img`
  width: 80%;
`;
export const LandingText = styled.div`
  flex: 1;
`;
export const LandingTextPara1 = styled.div`
  font-family: "Roboto Mono", sans-serif;
  color: rgb(243, 20, 200);
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;
export const LandingTextPara2 = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 4rem;
  line-height: 4.5rem;
  color: white;
  font-weight: 900;
`;
export const LandingTextPara3 = styled.div`
  font-family: "Roboto Mono", sans-serif;
  font-size: 18px;
  line-height: 28px;
  width: 90%;
  color: white;
`;
export const LandingTextButtonBox = styled.div`
  display: flex;
  margin: 20px 0px;
`;
export const LandingTextButtonBoxItem = styled.a`
  background-color: rgb(252, 212, 36);
  font-weight: 900;
  color: black;
  margin-right: 20px;
  padding: 20px 38px;
  border-radius: 40px;
  text-decoration: none;
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
  background-color: f0f0f0;
  display: flex;
  padding: 100px 40px;
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
  font-size: 20px;
  text-align: center;
  padding: 20px 38px;
  border-radius: 40px;
  margin: 5px;
  cursor: pointer;
`;
export const MintDivLabel = styled.div`
  font-family: "Roboto Mono", sans-serif;
  color: rgb(99, 99, 156);
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;
export const MintDivInput = styled.input`
  border-radius: 20px;
  font-size: 20px;
  width: 60%;
  padding: 20px;
  border-radius: 40px;
  padding-left: 30px;
`;

export const NftLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 100px;
  padding: 50px;
  margin-bottom: 30px;
`;
export const NftItemImage = styled.img`
  width: 100%;
  border-radius: 30px;
`;

export const ItemDivLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  border: 12px solid black;
  padding: 50px;
  margin-bottom: 20px;
`;
export const ItemDivImage = styled.img`
  width: 25%;
  margin-top: -100px;
  border: 12px solid black;
  border-radius: 30%;
`;
export const ItemDivTitle = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 48px;
  line-height: 56px;
  font-weight: 900;
  margin: 30px;
`;
export const ItemDivPara = styled.div`
  width: 80%;
  font-family: "Roboto Mono", sans-serif;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;
export const Rareblock = styled.img`
  width: 100%;
  border-radius: 20px;
`;
export const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 20px 40px;
  background-image: linear-gradient(
    to bottom left,
    rgb(111, 19, 204),
    rgb(243, 20, 194)
  );
`;
export const FooterTitle = styled.div`
  width: 20%;
  font-family: Lobster;
  font-size: 50px;
  color: white;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  color: white;
  font-size: 40px;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
`;
export const FooterParagraph = styled.div`
  width: 20%;
  font-family: Arial, sans-serif;
  color: white;
`;
