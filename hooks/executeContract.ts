import { useMutation } from "@tanstack/react-query";
import { useTonAddress } from "@tonconnect/ui-react";

import { Address, toNano } from "@ton/core";
import { useTonSDK } from "./tonSDK";
import {
  useSUSDFJettonMasterContract,
  useUSDFJettonMasterContract,
} from "./JettonMasterContract";

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

export const useExecuteMint = (
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

export const useTransfer2CF = () => {
  const sdk = useTonSDK();
  const USDFContract = useUSDFJettonMasterContract();

  return useMutation({
    mutationKey: [!!USDFContract, !!sdk],
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!USDFContract || !sdk) {
        throw new Error("Jetton not found");
      }

      USDFContract.send(
        sdk.sender!,
        {
          value: toNano(0.1),
        },
        {
          $$type: "Transfer2CF",
          amount: BigInt(Number(amount) * 1e6),
        }
      );
    },
  });
};

export function useUSDFWithdrawTon() {
  const sdk = useTonSDK();
  const USDFContract = useUSDFJettonMasterContract();

  return useMutation({
    mutationKey: [!!USDFContract, !!sdk],
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!USDFContract || !sdk) {
        throw new Error("Jetton not found");
      }

      USDFContract.send(
        sdk.sender!,
        {
          value: toNano(0.1),
        },
        {
          $$type: "WithdrawTon",
          amount: BigInt(Number(amount) * 1e6),
        }
      );
    },
  });
}

export function useUSDFWithdrawJetton() {
  const sdk = useTonSDK();
  const USDFContract = useUSDFJettonMasterContract();

  return useMutation({
    mutationKey: [!!USDFContract, !!sdk],
    mutationFn: async ({
      amount,
      jettonAddress,
    }: {
      amount: string;
      jettonAddress: string;
    }) => {
      if (!USDFContract || !sdk) {
        throw new Error("Jetton not found");
      }

      USDFContract.send(
        sdk.sender!,
        {
          value: toNano(0.1),
        },
        {
          $$type: "WithdrawJetton",
          jetton_addr: Address.parse(jettonAddress),
          amount: BigInt(Number(amount) * 1e6),
        }
      );
    },
  });
}

export function useSUSDFWithdrawTon() {
  const sdk = useTonSDK();
  const USDFContract = useSUSDFJettonMasterContract();

  return useMutation({
    mutationKey: [!!USDFContract, !!sdk],
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!USDFContract || !sdk) {
        throw new Error("Jetton not found");
      }

      USDFContract.send(
        sdk.sender!,
        {
          value: toNano(0.1),
        },
        {
          $$type: "WithdrawTon",
          amount: BigInt(Number(amount) * 1e6),
        }
      );
    },
  });
}

export function useSUSDFWithdrawJetton() {
  const sdk = useTonSDK();
  const USDFContract = useSUSDFJettonMasterContract();

  return useMutation({
    mutationKey: [!!USDFContract, !!sdk],
    mutationFn: async ({
      amount,
      jettonAddress,
    }: {
      amount: string;
      jettonAddress: string;
    }) => {
      if (!USDFContract || !sdk) {
        throw new Error("Jetton not found");
      }

      USDFContract.send(
        sdk.sender!,
        {
          value: toNano(0.1),
        },
        {
          $$type: "WithdrawJetton",
          jetton_addr: Address.parse(jettonAddress),
          amount: BigInt(Number(amount) * 1e6),
        }
      );
    },
  });
}
