const YOUR_ABI = [ {
  "inputs": [
    {
      "internalType": "uint8",
      "name": "_maxWhitelistAddresses",
      "type": "uint8"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "WhitelistAddresses",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "addAddressToWhitelist",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "maxWhitelistAddresses",
  "outputs": [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "numAddressesWhitelisted",
  "outputs": [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}
  ]


export const abi = YOUR_ABI;
export const WHITELIST_CONTRACT_ADDRESS = "0xfdf7b57Cf87560a841AC4EaD5AE3928761F4FA2c";