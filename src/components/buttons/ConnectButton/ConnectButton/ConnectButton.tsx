import { useEthers } from "@usedapp/core";
import { useEffect } from "react";
import { MintDivButton } from "../../../style";

export default function ConnectButton({
  getAccount,
}: {
  getAccount: (temp: any) => void;
}) {
  const { activateBrowserWallet, account } = useEthers();
  useEffect(() => {
    getAccount(account);
  }, [account]);

  function handleConnectWallet() {
    activateBrowserWallet();
  }
  if (account) {
    return (
      <MintDivButton>
        {account &&
          `${account.slice(0, 6)}...${account.slice(
            account.length - 4,
            account.length
          )}`}
      </MintDivButton>
    );
  } else {
    return (
      <MintDivButton onClick={handleConnectWallet}>
        Connect to a wallet
      </MintDivButton>
    );
  }
}
