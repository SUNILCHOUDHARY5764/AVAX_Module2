import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styles from './Bank.module.css';
import simple_token_abi from './Contracts/bank_app_abi.json';

const BankApp = () => {

  let contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const [transferHash, setTransferHash] = useState(null);
  const [checkAcc, setCheckAcc] = useState("false");
  const [accStatus, setAccStatus] = useState("");
  const [accbalance, setAccBalance] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
        })
        .catch(error => {
          setErrorMessage(error.message);

        });

    } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension');
    }
  }


  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  }
  const chainChangedHandler = () => {

    window.location.reload();
  }

  window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum.on('chainChanged', chainChangedHandler);

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(contractAddress, simple_token_abi, tempSigner);
    setContract(tempContract);
  }

  const createAccount = async () => {
    let txt = await contract.createAcc();
    console.log(txt);
    setAccStatus("Your Account is created");
  }
  const checkAccountExists = async () => {
    let txt = await contract.accountExists();
    if (txt == true) {
      setCheckAcc("true");
    }
  }
  const AccountBalance = async () => {
    let txt = await contract.accountBalance();
    let balanceNumber = txt.toNumber();
    console.log(balanceNumber)
    setAccBalance('' + balanceNumber);
  }
  const DepositBalance = async (e) => {
    e.preventDefault();
    let depositAmount = e.target.depositAmount.value;
    let txt = await contract.deposit({
      value: depositAmount
    });
  }

  const WithdrawBalance = async (e) => {
    e.preventDefault();
    let withdrawAmount = e.target.withdrawAmount.value;
    let txt = await contract.withdraw(withdrawAmount);
    console.log(txt);
  }


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bank Dapp</h1>
        <button className={styles.connectButton} onClick={connectWalletHandler}>
          {connButtonText}
        </button>
      </header>

      <section className={styles.section}>
        <h2>Account Info</h2>
        <div className={styles.walletCard}>
          <p>Address: {defaultAccount}</p>
          <button className={styles.balanceButton} onClick={AccountBalance}>
            Check Balance
          </button>
          <p>Balance: {accbalance} </p>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
          {accStatus && <div className={styles.success}>{accStatus}</div>}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Interactions</h2>
        <div className={styles.interactionsCard}>
          <button className={styles.interactionButton} onClick={createAccount}>
            Create Account
          </button>
          <button className={styles.interactionButton} onClick={checkAccountExists}>
            Check Account
          </button>
          <p>Status: {checkAcc}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Deposit & Withdraw</h2>
        <div className={styles.interactionsCard}>
          <form onSubmit={DepositBalance}>
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input type="number" id="depositAmount" min="0" step="1" />
            <button type="submit" className={styles.actionButton}>
              Deposit
            </button>
          </form>

          <form onSubmit={WithdrawBalance}>
            <label htmlFor="withdrawAmount">Withdraw Amount:</label>
            <input type="number" id="withdrawAmount" min="0" step="1" />
            <button type="submit" className={styles.actionButton}>
              Withdraw
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BankApp;
