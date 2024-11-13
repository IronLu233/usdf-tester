'use client'
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { useExecuteTransfer, useExecuteBurn } from './useExecuteStake';
import { useJettonWalletData } from './useTonSDK';
import { useState } from 'react';

const USDT_MASTER_ADDRESS = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';
const USDF_MASTER_ADDRESS = 'EQB32vHWubvEv71kP-jdjoPQBi2dsb9V85tFw_60QjKTq-J-';
const STAKING_ADDRESS = 'EQAJX24C8N5UiPxedga1B-Chd_TxRE87wYG4lO9bf8gG9L8W'

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  const { mutateAsync: exchangeUSDF } = useExecuteTransfer(USDT_MASTER_ADDRESS, USDF_MASTER_ADDRESS);
  const { mutateAsync: burnUSDF } = useExecuteBurn(USDF_MASTER_ADDRESS);
  const { data: USDFData } = useJettonWalletData(USDF_MASTER_ADDRESS);
  const { data: stUSDFData } = useJettonWalletData(STAKING_ADDRESS);
  const { mutateAsync: stakeUSDF } = useExecuteTransfer(USDF_MASTER_ADDRESS, STAKING_ADDRESS);

  const [amount, setAmount] = useState('');
  const [stakeUSDFAmount, setStakeUSDFAmount] = useState('');

  if (!address) {
    return <button onClick={() => tonConnectUI.openModal()}>Connect</button>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountInMicro = (parseFloat(amount) * 10 ** 6).toString();
    exchangeUSDF({ amount: amountInMicro });
  };

  const handleBurn = () => {
    const amountInMicro = (parseFloat(amount) * 10 ** 6).toString();
    burnUSDF({ amount: amountInMicro });
  };

  return (
    <div>
      <div>{address}</div>
      <ul>
        <li>
          <form onSubmit={handleSubmit}>
            <label>
              Exchange Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <button type="submit">Execute</button>
            <button type="button" onClick={handleBurn}>Burn</button>
          </form>
          current USDF amount: {Number(USDFData?.balance ?? 0) / 10 ** 6}
        </li>
        <li>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const amountInMicro = (parseFloat(stakeUSDFAmount) * 10 ** 6).toString();
              stakeUSDF({ amount: amountInMicro });
            }}
          >
            <label>
              Stake Amount:
              <input
                type="number"
                value={stakeUSDFAmount}
                onChange={(e) => setStakeUSDFAmount(e.target.value)}
              />
            </label>
            <button type="submit">Stake</button>
          </form>
          stUSDF amount: {Number(stUSDFData?.balance ?? 0) / 10 ** 6}
        </li>
      </ul>
    </div>
  );
}
