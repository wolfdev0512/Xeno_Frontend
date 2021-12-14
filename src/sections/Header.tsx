import {
  HeaderLayout,
  HeaderTitle,
  HeaderMenu,
  HeaderMenuItem,
} from "../components/style";

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderTitle>Xeno</HeaderTitle>
      <HeaderMenu>
        <HeaderMenuItem href="#home">HOME</HeaderMenuItem>
        <HeaderMenuItem href="#mint">MINT</HeaderMenuItem>
        <HeaderMenuItem href="#about">ABOUT</HeaderMenuItem>
      </HeaderMenu>
    </HeaderLayout>
  );
}
