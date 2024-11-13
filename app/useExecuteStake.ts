import { useMutation } from "@tanstack/react-query";
import { useTonAddress } from "@tonconnect/ui-react";

import { Address, toNano } from "@ton/core";
import { useTonSDK } from "./useTonSDK";

export const useExecuteBurn = (jettonMasterAddress: string) => {
  const sdk = useTonSDK();
  const jetton = sdk?.openJetton(Address.parse(jettonMasterAddress));

  return useMutation({
    mutationKey: [jetton, !!sdk],
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!jetton || !sdk) {
        throw new Error("Jetton not found");
      }

      const myJettonWallet = await jetton.getWallet(sdk.sender!.address!);

      myJettonWallet.sendBurn(sdk.sender!, BigInt(amount));
    },
  });
};

export const useExecuteTransfer = (
  jettonMasterAddress: string,
  receiverAddress: string
) => {
  const walletAddress = useTonAddress();
  const sdk = useTonSDK();

  const jetton = sdk?.openJetton(Address.parse(jettonMasterAddress));

  return useMutation({
    mutationKey: [receiverAddress, jetton],
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!jetton || !walletAddress || !sdk) {
        throw new Error("Jetton not found");
      }

      const myJettonWallet = await jetton.getWallet(sdk.sender!.address!);

      myJettonWallet.send(
        sdk.sender!,
        Address.parse(receiverAddress),
        BigInt(amount),
        {
          notify: {
            amount: toNano("0.1"),
            // TODO: add payload
          },
        }
      );
    },
  });
};
