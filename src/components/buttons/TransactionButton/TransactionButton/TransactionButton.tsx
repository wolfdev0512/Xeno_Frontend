import { useSendTransaction } from "@usedapp/core";
import { useEffect, useState } from "react";
import { MintDivButton } from "../../../style";
import { utils } from "ethers";

export default function TransactionButton({ account }: any) {
  const { sendTransaction, state } = useSendTransaction();
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    sendTransaction({
      to: "0xd53592De91fBF339f458945a64443b1C8d4010c3",
      value: utils.parseEther("0.095"),
    });
  };
  useEffect(() => {
    if (state.status != "Mining") {
      setDisabled(false);
    }
  }, [state]);
  return <MintDivButton onClick={handleClick}>Mint</MintDivButton>;
}
