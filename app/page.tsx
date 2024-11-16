"use client";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import {
  Box,
  Button,
  DataList,
  Flex,
  Heading,
  TextField,
} from "@radix-ui/themes";
import {
  useExecuteMint,
  useExecuteBurn,
  useUSDFWithdrawTon,
  useUSDFWithdrawJetton,
  useSUSDFWithdrawTon,
  useSUSDFWithdrawJetton,
  useTransfer2CF,
} from "../hooks/executeContract";
import {
  useJettonWalletData,
  useSUSDFGetMasterData,
  useUSDFGetMasterData,
} from "../hooks/queryContract";
import { useState } from "react";
import { SingleInputForm } from "@/components/SingleInputForm";
import { TwoFieldInputForm } from "@/components/TwoFiledInputForm";

const USDT_MASTER_ADDRESS = "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs";
const USDF_MASTER_ADDRESS = "EQB32vHWubvEv71kP-jdjoPQBi2dsb9V85tFw_60QjKTq-J-";
const STAKING_ADDRESS = "EQAJX24C8N5UiPxedga1B-Chd_TxRE87wYG4lO9bf8gG9L8W";

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  const { mutateAsync: exchangeUSDF } = useExecuteMint(
    USDT_MASTER_ADDRESS,
    USDF_MASTER_ADDRESS
  );
  const { mutateAsync: burnUSDF } = useExecuteBurn(USDF_MASTER_ADDRESS);
  const { mutateAsync: burnSUSDF } = useExecuteBurn(STAKING_ADDRESS);
  const { data: USDFData } = useJettonWalletData(USDF_MASTER_ADDRESS);
  const { data: SUSDFData } = useJettonWalletData(STAKING_ADDRESS);
  const { mutateAsync: stakeUSDF } = useExecuteMint(
    USDF_MASTER_ADDRESS,
    STAKING_ADDRESS
  );

  const [amount, setAmount] = useState("");
  const [stakeUSDFAmount, setStakeUSDFAmount] = useState("");

  const { data: USDFMasterData } = useUSDFGetMasterData();
  const { data: SUSDFMasterData, error } = useSUSDFGetMasterData();
  const { mutateAsync: executeUSDFWithdrawTon } = useUSDFWithdrawTon();
  const { mutateAsync: executeUSDFWithdrawJetton } = useUSDFWithdrawJetton();
  const { mutateAsync: executeSUSDFWithdrawTon } = useSUSDFWithdrawTon();
  const { mutateAsync: executeSUSDFWithdrawJetton } = useSUSDFWithdrawJetton();
  const { mutateAsync: excuteTransfer2CF } = useTransfer2CF();

  if (!address) {
    return <Button onClick={() => tonConnectUI.openModal()}>Connect</Button>;
  }

  return (
    <Box>
      <Flex>
        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Address</DataList.Label>
            <DataList.Value>{address}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>USDT Supply in USDF Master</DataList.Label>
            <DataList.Value>{USDFMasterData?.usdtSupply}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Pending USDT Supply in USDF Master</DataList.Label>
            <DataList.Value>{USDFMasterData?.pendingUsdtSupply}</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Current Wallet USDF</DataList.Label>
            <DataList.Value>
              {Number(USDFData?.balance || 0) / 1e6}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Current Wallet SUSDF</DataList.Label>
            <DataList.Value>{Number(SUSDFData?.balance) / 1e6}</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Flex>
      <Flex direction="column" gap="8" align="center" justify="center">
        <SingleInputForm
          title="USDT to USDF"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            exchangeUSDF({ amount: amountInMicro });
          }}
        />
        <SingleInputForm
          title="Burn USDF"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            burnUSDF({ amount: amountInMicro });
          }}
        />

        <SingleInputForm
          title="USDF Transfer to CF"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            excuteTransfer2CF({ amount: amountInMicro });
          }}
        />
        <SingleInputForm
          title="Stake USDF"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            stakeUSDF({ amount: amountInMicro });
          }}
        />

        <SingleInputForm
          title="Burn SUSDF"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            burnSUSDF({ amount: amountInMicro });
          }}
        />

        <SingleInputForm
          title="USDF Withdraw Ton"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            executeUSDFWithdrawTon({ amount: amountInMicro });
          }}
        />

        <TwoFieldInputForm
          title="USDF Withdraw Jetton"
          action={(val1, val2) => {
            const amountInMicro = (parseFloat(val1) * 10 ** 6).toString();
            executeUSDFWithdrawJetton({
              amount: amountInMicro,
              jettonAddress: val2,
            });
          }}
        />

        <SingleInputForm
          title="SUSDF Withdraw Ton"
          action={(val) => {
            const amountInMicro = (parseFloat(val) * 10 ** 6).toString();
            executeSUSDFWithdrawTon({ amount: amountInMicro });
          }}
        />

        <TwoFieldInputForm
          title="SUSDF Withdraw Jetton"
          action={(val1, val2) => {
            const amountInMicro = (parseFloat(val1) * 10 ** 6).toString();
            executeSUSDFWithdrawJetton({
              amount: amountInMicro,
              jettonAddress: val2,
            });
          }}
        />

        {/*




        <Box>
          <Heading>USDF Withdraw Ton</Heading>
          <TextField.Root placeholder="Withdraw Ton">
            <TextField.Slot side="right">
              <Button>Withdraw</Button>
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Box>
            <Heading>USDF Withdraw Jetton</Heading>
            <TextField.Root placeholder="Jetton Address" />
            <TextField.Root placeholder="Withdraw Jetton" />
            <Button>Withdraw</Button>
        </Box>

        <Box>
          <Heading>SUSDF Withdraw Ton</Heading>
          <TextField.Root placeholder="Withdraw Ton">
            <TextField.Slot side="right">
              <Button>Withdraw</Button>
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Box>
            <Heading>SUSDF Withdraw Jetton</Heading>
            <TextField.Root placeholder="Jetton Address" />
            <TextField.Root placeholder="Withdraw Jetton" />
            <Button>Withdraw</Button>
        </Box> */}
      </Flex>
    </Box>
  );
}
