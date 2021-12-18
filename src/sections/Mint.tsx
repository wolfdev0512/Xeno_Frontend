import { useState } from "react";

import {
  MintLayout,
  MintText,
  MintTextPara1,
  MintTextPara2,
  MintDiv,
  MintDivTitle,
  MintDivLabel,
  MintDivInput,
} from "../components/style";
import { ConnectButton } from "../components/buttons/ConnectButton";
import { TransactionButton } from "components/buttons/TransactionButton";

export default function Mint() {
  const [count, setCount] = useState(1);
  const [account, setAccount] = useState<any>();
  const getData = (temp: any) => {
    setAccount(temp);
  };
  const onChangeCount = (e: any) => {
    setCount(e.target.value);
  };
  return (
    <MintLayout id="mint">
      <MintText>
        <MintTextPara1>What is the Xeno Project NFT?</MintTextPara1>
        <MintTextPara2>
          We are pledging 20% of ALL Xeno NFTS LIFETIME royalties through
          establishing "The Space Network" which will be our community-voted
          fund.
        </MintTextPara2>
        <MintTextPara2>
          compatibility is going to be one of the most important things when
          getting funding in the future. A lot of money is being made in the
          crypto space, and the only way for you to currently become a part of
          these projects; is if you were to liquidate your positions and donate
          fiat currency. That is a massive deterrent for almost the entirety of
          the crypto community.
        </MintTextPara2>
      </MintText>

      <MintDiv>
        <MintDivTitle>Purchase</MintDivTitle>
        <ConnectButton getAccount={getData}></ConnectButton>
        <MintDivLabel>Amount</MintDivLabel>
        <MintDivInput
          onChange={onChangeCount}
          type={"number"}
          step={1}
          defaultValue={1}
          min={1}
        ></MintDivInput>
        <TransactionButton account={account} count={count}></TransactionButton>
      </MintDiv>
    </MintLayout>
  );
}
