# Bank App Metacrafters

A simple Ethereum-based bank application smart contract with a React frontend for interacting with the contract.

## Description

The "Bank App Metacrafters" project consists of a Solidity smart contract called "BankApp," which provides basic banking functionality on the Ethereum blockchain. Users can create bank accounts, deposit and withdraw funds, and check their account balances using the contract. The project also includes a React frontend that enables users to interact with the smart contract seamlessly.

## Getting Started

### Installing

To run the project locally, follow these steps:

1. Clone the repository from GitHub: [Bank App Metacrafters Repo](https://github.com/gautham2k3/ETH-AVAX_Mod-2_Project/).
2. Navigate to the project directory on your machine.

### Executing program

1. Make sure you have [MetaMask](https://metamask.io/) installed in your web browser.
2. Start the development server for the React frontend:

```bash
npm install
npm start
```

3. Connect your MetaMask wallet to the application by clicking the "Connect Wallet" button.

## Help

If you encounter any issues while running the application, try the following:

1. Make sure MetaMask is properly installed and set up in your web browser.
2. Check if you are connected to the correct Ethereum network (localhost).
3. Ensure you have enough funds in your MetaMask wallet to perform transactions on the Ethereum blockchain.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console

## Function Descriptions

### `connectWalletHandler`

The `connectWalletHandler` function is responsible for establishing a connection with the MetaMask wallet. When users click the "Connect Wallet" button in the frontend, this function is triggered, enabling them to interact securely with the application using their Ethereum addresses.

### `accountChangedHandler`

The `accountChangedHandler` function comes into play when there is a change in the connected MetaMask account. It updates the default Ethereum address in the frontend, allowing seamless communication with the smart contract using the new account.

### `chainChangedHandler`

The `chainChangedHandler` function is triggered when there is a change in the selected blockchain network within the MetaMask wallet. It ensures that the application adapts to the new network settings and continues to function smoothly.

### `updateEthers`

The `updateEthers` function plays a crucial role in facilitating communication between the application, the deployed smart contract, and the MetaMask wallet's provider network. By utilizing the Web3Provider and Signer from ethers.js library, this function establishes the necessary connections for smooth data exchange between the frontend and the smart contract.

### `createAccount`

The `createAccount` function enables users to create a bank account within the Bank Dapp. When users trigger this function, a new account will be registered in the bank, allowing them to deposit, withdraw, and transfer funds securely.

### `checkAccountExists`

The `checkAccountExists` function allows users to verify if their account is listed within the Bank Dapp. By invoking this function, users can confirm the existence of their account before proceeding with transactions.

### `accountBalance`

The `accountBalance` function enables users to check the balance of their bank account. Upon calling this function, the application communicates with the smart contract to fetch and display the current balance associated with the user's account.

### `depositBalance`

The `depositBalance` function facilitates the process of depositing funds from the user's MetaMask wallet into their bank account. By specifying the deposit amount, users can initiate the transaction to increase their account balance.

### `withdrawBalance`

The `withdrawBalance` function allows users to withdraw funds from their bank account to their MetaMask wallet address. Users specify the withdrawal amount, and the application processes the request, deducting the amount from the account balance and transferring it to the designated wallet address.

## Authors

- Gautham 
- bgautham27@gmail.com

## License

This project is licensed under the MIT License.
