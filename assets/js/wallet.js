const tokenAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_rewardToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_router",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "interval",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_charityWallet",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AccountActivated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "bnbAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "AutoLiquify",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "inviter",
                "type": "address"
            }
        ],
        "name": "InviterSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "who",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "MiningTaken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newPower",
                "type": "uint256"
            }
        ],
        "name": "PowerUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nextAvailableClaimDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "RewardClaimedSuccessfully",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "StackhokderFeeDistributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "stackholder",
                "type": "address"
            }
        ],
        "name": "StackholderAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "StackholderFeeBurned",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "stackholder",
                "type": "address"
            }
        ],
        "name": "StackholderRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokensSwapped",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "bnbReceived",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokensIntoLiqudity",
                "type": "uint256"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "enabled",
                "type": "bool"
            }
        ],
        "name": "SwapUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_charityFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_feeDecimal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_inviteFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_liqFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_parentInviteFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_rewardFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_stakeHolderFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_taxFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "accountActivated",
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
        "name": "activateAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "activatePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "activedAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            }
        ],
        "name": "addMultiStackholder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "stackholder",
                "type": "address"
            }
        ],
        "name": "addStackholder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "addressPower",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "calculateReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "charityWallet",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeStackholder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "excludeAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getActivedAddressCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAddedStackholderCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getClaimableReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getExcludedBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getInvitedAccountLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "page",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageCount",
                "type": "uint256"
            }
        ],
        "name": "getInvitedAccountWithPaged",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getMiningAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "includeAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "invited",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "invitees",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isExcluded",
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
        "name": "isFeeActive",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isStackholder",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastbuy",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxStackholderCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxTxAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minTokensBeforeSwap",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "nextAvailableClaimDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pair",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "reflectionFromToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "stackholder",
                "type": "address"
            }
        ],
        "name": "removeStackholder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardCycleInterval",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "setActivatePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "buy",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "sell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "p2p",
                "type": "uint256"
            }
        ],
        "name": "setChairtyFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            }
        ],
        "name": "setCharityWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "value",
                "type": "bool"
            }
        ],
        "name": "setFeeActive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "inviter",
                "type": "address"
            }
        ],
        "name": "setInviter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "buy",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "sell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "p2p",
                "type": "uint256"
            }
        ],
        "name": "setLiquidityFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "count",
                "type": "uint256"
            }
        ],
        "name": "setMaxStackholderCount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setMaxTxAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setMinTokensBeforeSwap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "buy",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "sell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "p2p",
                "type": "uint256"
            }
        ],
        "name": "setNormalRewardFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_pair",
                "type": "address"
            },
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "_router",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_rewardToken",
                "type": "address"
            }
        ],
        "name": "setPairRouterRewardToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "interval",
                "type": "uint256"
            }
        ],
        "name": "setRewardCycleInterval",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "enabled",
                "type": "bool"
            }
        ],
        "name": "setSwapEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "buy",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "sell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "p2p",
                "type": "uint256"
            }
        ],
        "name": "setTaxFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "value",
                "type": "bool"
            }
        ],
        "name": "setTaxless",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "stackholders",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stopMining",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapEnabled",
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
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "reflectionAmount",
                "type": "uint256"
            }
        ],
        "name": "tokenFromReflection",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPerMS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalPower",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "withdrawEarningFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawMining",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

const erc20Abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const tokenAddress = '0x9ec928cBe04746fbfF3108a0F1f7D5F0efDe449d';
const zeroAddress = '0x0000000000000000000000000000000000000000';

const connectButton = document.getElementById('connect');
const errorInfo = document.getElementById('error');
const setInviterButton = document.getElementById('setInviter');
const inviterInput = document.getElementById('inviterAddress');
const inviteLinkInput = document.getElementById('inviteLink');
const copyInviteAddressButton = document.getElementById('copyInviteAddress');
const invitedAccountsElement = document.getElementById('invitedAccounts');

const activeAccountButton = document.getElementById('activeAccountButton');
const claimRewardButton = document.getElementById('claimReawardButton');
const withdrawMiningButton = document.getElementById('withdrawMiningButton');

const minterAmountElement = document.getElementById('minterAmount');
const totalPowerValueElement = document.getElementById('totalPowerValue');
const myPowerValueElement = document.getElementById('myPowerValue');
const miningAmountElement = document.getElementById('miningAmount');
const rewardAmountElement = document.getElementById('rewardAmount');
const nextAvailableDateElement = document.getElementById('nextAvailableDate');

let contractInstance = null;
let currentAccount = null;
let web3Instance = null;
let inviterAddress = zeroAddress;

window.addEventListener('load', async function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inviter = urlParams.get('inviter');
    if (inviter != null && inviter.length > 0) {
        inviterAddress = inviter;
    }

    let info = ''
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
        web3Instance = new Web3(window.ethereum);
    } else if (typeof window.web3 !== 'undefined') {
        web3Instance = new Web3(window.web3.currentProvider);
    } else {
        errorInfo.innerText = 'No available web3 provider';
        return;
    }

    if (isInHomePage()) {
        inviteLinkInput.value = generateInviteLink(zeroAddress);
        inviterInput.value = inviterAddress;
        setInviterButton.onclick = setInviter;
        copyInviteAddressButton.onclick = copyTestToClipboard;
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length == 0) {
        connectButton.value = 'Connect To Wallet';
        connectButton.onclick = onClickConnect;
    } else {
        currentAccount = accounts[0];
        console.log(`current account: ${currentAccount}`);
        info += 'currentAccount: ' + currentAccount + '\n';

        if (isInHomePage()) {
            connectButton.innerText = getDisplayAddress(currentAccount);
            connectButton.onclick = () => { };
            inviteLinkInput.value = generateInviteLink(currentAccount);

            activeAccountButton.onclick = activeAccount;
            claimRewardButton.onclick = claimReward;
            withdrawMiningButton.onclick = withdrawMining;
        }
    }
    contractInstance = new web3Instance.eth.Contract(tokenAbi, tokenAddress);

    if (invitedAccountsElement) {
        const accounts = await getInvitedAccounts();
        console.log(accounts);

        invitedAccountsElement.innerHTML = '';
        for (const index in accounts) {
            invitedAccountsElement.innerHTML += `<li class="invite-item">${accounts[index]}</li>\n`;
        }
    }

    if (isInHomePage()) {
        await refreshHomepageData();
    }
})

const refreshHomepageData = async () => {
    minterAmountElement.innerText = await getActivedAccountCount();
    totalPowerValueElement.innerText = await getTotalMiningPower();
    myPowerValueElement.innerText = await getMyMiningPower();
    miningAmountElement.innerText = await getMyMiningAmountToWithdraw();
    rewardAmountElement.innerText = await getClaimableRewardAmount();
    nextAvailableDateElement.innerText = await getNextClaimTimestamp();

    if (await isAccountActivated(currentAccount)) {
        activeAccountButton.innerText = '已激活';
        activeAccountButton.onclick = () => { };
    }
}

const isInHomePage = () => {
    return inviteLinkInput != null;
}

const onClickConnect = async () => {
    try {
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        console.log(newAccounts);
        // handleNewAccounts(newAccounts)

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        currentAccount = accounts[0];
        console.log(currentAccount);

        connectButton.value = getDisplayAddress(currentAccount);
        connectButton.onclick = () => { };
        inviteLinkInput.value = generateInviteLink(currentAccount);
    } catch (error) {
        errorInfo.innerText = error;
        console.error(error)
    }
}

const getDisplayAddress = (address) => {
    return address.substr(0, 6) + '...' + address.substr(address.length - 4, 4)
}

const copyTestToClipboard = async () => {
    const inviteLink = generateInviteLink(currentAccount);
    /* Copy the text inside the text field */
    await navigator.clipboard.writeText(inviteLink);
}

const generateInviteLink = (address) => {
    return "http://eooshi.com/index.html?inviter=" + address
}

const setInviter = async () => {
    if (inviterInput.value == null || inviterInput.value.length != zeroAddress.length) {
        return false;
    }

    try {
        await contractInstance.methods.setInviter(inviterInput.value).send({ from: currentAccount })
            .once('sending', function(payload) { console.log(payload); setInviterButton.value = '绑定上级中...'; })
            .once('sent', function(payload) { console.log(payload); setInviterButton.value = '绑定上级中...'; })
            .once('transactionHash', function(hash) { console.log(hash); setInviterButton.value = '绑定上级中...'; })
            .once('receipt', function(receipt) { console.log(receipt); setInviterButton.value = '绑定上级成功'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error), setInviterButton.value = '绑定上级失败'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                setInviterButton.value = '绑定上级成功';
            });
    } catch (error) {
        setInviterButton.value = '绑定上级失败';
        errorInfo.innerText = error;
        console.error(error)
    }
}

const activeAccount = async () => {
    try {
        await contractInstance.methods.activateAccount().send({ from: currentAccount })
            .once('sending', function(payload) { console.log(payload); activeAccountButton.innerText = '激活中...'; })
            .once('sent', function(payload) { console.log(payload); activeAccountButton.innerText = '激活中...'; })
            .once('transactionHash', function(hash) { console.log(hash); activeAccountButton.innerText = '激活中...'; })
            .once('receipt', function(receipt) { console.log(receipt); activeAccountButton.innerText = '激活成功'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error), activeAccountButton.innerText = '激活失败'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                activeAccountButton.innerText = '激活成功';
            });
        await refreshHomepageData();
    } catch (error) {
        activeAccountButton.innerText = '激活失败';
        console.error(error)
    }
}

const claimReward = async () => {
    try {
        await contractInstance.methods.claimReward().send({ from: currentAccount })
            .once('sending', function(payload) { console.log(payload); claimRewardButton.innerText = '领取中...'; })
            .once('sent', function(payload) { console.log(payload); claimRewardButton.innerText = '领取中...'; })
            .once('transactionHash', function(hash) { console.log(hash); claimRewardButton.innerText = '领取中...'; })
            .once('receipt', function(receipt) { console.log(receipt); claimRewardButton.innerText = '领取成功'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error), claimRewardButton.innerText = '领取失败'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                claimRewardButton.innerText = '领取成功';
            });
        await refreshHomepageData();
    } catch (error) {
        claimRewardButton.innerText = '领取失败';
        // errorInfo.innerText = error;
        console.error(error)
    }
}

const withdrawMining = async () => {
    try {
        await contractInstance.methods.withdrawMining().send({ from: currentAccount, value: web3Instance.utils.toWei('10', 'finney') })
            .once('sending', function(payload) { console.log(payload); withdrawMiningButton.innerText = '提取中...'; })
            .once('sent', function(payload) { console.log(payload); withdrawMiningButton.innerText = '提取中...'; })
            .once('transactionHash', function(hash) { console.log(hash); withdrawMiningButton.innerText = '提取中...'; })
            .once('receipt', function(receipt) { console.log(receipt); withdrawMiningButton.innerText = '提取成功'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error), withdrawMiningButton.innerText = '提取失败'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                withdrawMiningButton.innerText = '提取成功';
            });
        await refreshHomepageData();
    } catch (error) {
        withdrawMiningButton.innerText = '提取失败';
        console.error(error)
    }
}

const getNextClaimTimestamp = async () => {
    Number.prototype.padLeft = function(base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    }

    Date.prototype.format = function() {
        return [
            this.getFullYear().padLeft(),
            (this.getMonth() + 1).padLeft(),
            this.getDate().padLeft()
        ].join('-') + ' ' +
            [this.getHours().padLeft(),
            this.getMinutes().padLeft(),
            this.getSeconds().padLeft()].join(':');;
    };

    const timestamp = await contractInstance.methods.nextAvailableClaimDate(currentAccount).call();
    if (timestamp == '0') {
        return '暂不可以领取';
    }
    const date = new Date(parseInt(timestamp) * 1000);
    // console.log(date.format());
    return date.format();
}

const getClaimableRewardAmount = async () => {
    try {
        let amount = await contractInstance.methods.getClaimableReward(currentAccount).call();
        amount = web3Instance.utils.fromWei(amount);
        amount = parseFloat(amount).toFixed(2);
        // console.log(amount);
        return amount;
    } catch (e) {
        // console.log(e);
        return 0;
    }
}

const getActivedAccountCount = async () => {
    const amount = await contractInstance.methods.getActivedAddressCount().call();
    return amount;
}

const getMyMiningPower = async () => {
    const power = await contractInstance.methods.addressPower(currentAccount).call();
    return power;
}

const getMyMiningAmountToWithdraw = async () => {
    let amount = await contractInstance.methods.getMiningAmount(currentAccount).call();
    amount = web3Instance.utils.fromWei(amount);
    amount = parseFloat(amount).toFixed(2);
    // console.log(amount);
    return amount;
}

const getTotalMiningPower = async () => {
    const power = await contractInstance.methods.totalPower().call();
    return power;
}

const getInvitedAccounts = async () => {
    const result = [];

    let amount = await contractInstance.methods.getInvitedAccountLength(currentAccount).call();
    let page = 0;
    const pageCount = 1;

    while (amount > 0) {
        const tmp = await contractInstance.methods.getInvitedAccountWithPaged(currentAccount, page, pageCount).call();
        amount -= tmp.length;
        page += 1;
        result.push(...tmp);
    }
    return result;
}

const isAccountActivated = async (address) => {
    const activated = await contractInstance.methods.accountActivated(address).call();
    return activated;
}