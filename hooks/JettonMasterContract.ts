import { Address } from "@ton/core";
import { useTonSDK } from "./queryContract";
import { SUSDFJettonMasterContract } from "@/libs/SUSDFJettonMaster";
import { USDFJettonMasterContract } from "@/libs/USDFJettonMaster";

const USDF_MASTER_ADDRESS = "EQB32vHWubvEv71kP-jdjoPQBi2dsb9V85tFw_60QjKTq-J-";
const STAKING_ADDRESS = "EQAJX24C8N5UiPxedga1B-Chd_TxRE87wYG4lO9bf8gG9L8W";
/**
 * Hook to get the USDF Jetton Master contract instance.
 *
 * @returns The USDF Jetton Master contract instance or undefined if the SDK is not available.
 */
export function useUSDFJettonMasterContract() {
  const sdk = useTonSDK();
  return sdk?.api.open(
    USDFJettonMasterContract.fromAddress(Address.parse(USDF_MASTER_ADDRESS))
  );
}

/**
 * Hook to get the Staking USDF Jetton Master contract instance.
 *
 * @returns The Staking USDF Jetton Master contract instance or undefined if the SDK is not available.
 */
export function useSUSDFJettonMasterContract() {
  const sdk = useTonSDK();
  return sdk?.api.open(
    SUSDFJettonMasterContract.fromAddress(Address.parse(STAKING_ADDRESS))
  );
}
