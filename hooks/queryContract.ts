import { Address } from "@ton/ton";
import { useQuery } from "@tanstack/react-query";
import { useTonSDK } from "./tonSDK";
import {
  useSUSDFJettonMasterContract,
  useUSDFJettonMasterContract,
} from "./JettonMasterContract";

export const useJettonWalletData = (jettonMasterAddress: string) => {
  const sdk = useTonSDK();
  const jetton = sdk?.openJetton(Address.parse(jettonMasterAddress));
  return useQuery({
    queryKey: ["jettonAmount", jettonMasterAddress, jetton],
    enabled: !!sdk && !!jetton,
    queryFn: async () => {
      const wallet = await jetton?.getWallet(sdk!.sender!.address!);
      const data = await wallet?.getData();

      return data;
    },
  });
};

export function useUSDFGetMasterData() {
  const USDFJettonMasterContract = useUSDFJettonMasterContract();
  const sdk = useTonSDK();
  return useQuery({
    enabled: !!sdk && !!USDFJettonMasterContract,
    queryKey: ["usdfMasterData"],
    queryFn: async () => {
      const masterData = await USDFJettonMasterContract?.getGetMasterData();
      return {
        usdtSupply: Number(masterData?.usdt_supply || 0) / 1e6,
        pendingUsdtSupply: Number(masterData?.pending_usdt_supply || 0) / 1e6,
      };
    },
  });
}

export function useSUSDFGetMasterData() {
  const sdk = useTonSDK();
  const SUSDFJettonMasterContract = useSUSDFJettonMasterContract();

  return useQuery({
    enabled: !!sdk && !!SUSDFJettonMasterContract,
    queryKey: ["susdfMasterData"],
    queryFn: async () => {
      const masterData = await SUSDFJettonMasterContract?.getGetMasterData();
      return {
        usdfSupply: Number(masterData?.usdf_supply || 0) / 1e6,
        pendingUsdfSupply: Number(masterData?.pending_usdf_supply || 0) / 1e6,
      };
    },
  });
}
export { useTonSDK };

export function useSUSDFStakingInfo() {
  const sdk = useTonSDK();
  const SUSDFJettonMasterContract = useSUSDFJettonMasterContract();

  return useQuery({
    enabled: !!sdk && !!SUSDFJettonMasterContract,
    queryKey: ["susdfStakingInfo"],
    queryFn: async () => {
      // const stakingInfo =
      //   await SUSDFJettonMasterContract?.getGetAddrStakingInfo();
      // const result = [];
      // for (const info of stakingInfo) {
      //   result.push({
      //     amount: Number(info.amount) / 1e6,
      //     stakedAt: info,
      //   });
      // }
    },
  });
}
