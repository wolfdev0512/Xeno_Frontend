import { useSendTransaction, useNotifications } from "@usedapp/core";
import { useEffect, useState } from "react";
import { TransButton } from "./button.style";
import { utils } from "ethers";
import Swal from "sweetalert2";
import { FaLock, FaUnlockAlt } from "react-icons/fa";

type props = {
  account: any;
  count: number;
};

export default function TransactionButton({ account, count }: props) {
  const value = count * 0.095;
  const { sendTransaction, state } = useSendTransaction();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (account !== undefined) {
      setDisabled(false);
    }
  }, [account]);
  useEffect(() => {
    if (state.status === "Exception") {
      if (state.errorMessage?.includes("insufficient funds for gas")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You don't have enough ether",
        });
        setDisabled(false);
      }
      setDisabled(false);
    } else {
      if (state.status === "Mining") {
        Swal.showLoading();
      } else if (state.status === "Success") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setDisabled(false);
      }
    }
  }, [state]);
  const handleClick = () => {
    setDisabled(true);
    sendTransaction({
      to: "0xd53592De91fBF339f458945a64443b1C8d4010c3",
      value: utils.parseEther(value.toString()),
    });
  };
  return (
    <TransButton onClick={handleClick} disabled={disabled}>
      Buy {disabled ? <FaLock /> : <FaUnlockAlt />}
    </TransButton>
  );
}
