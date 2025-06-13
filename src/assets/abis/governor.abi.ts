export const GovernorTokenABI = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [],
		name: 'CheckpointUnorderedInsertion',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'daoId',
				type: 'uint256'
			}
		],
		name: 'DAONotFound',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'daoId',
				type: 'uint256'
			}
		],
		name: 'DAO_NOT_FOUND',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ECDSAInvalidSignature',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'length',
				type: 'uint256'
			}
		],
		name: 'ECDSAInvalidSignatureLength',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32'
			}
		],
		name: 'ECDSAInvalidSignatureS',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'increasedSupply',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'cap',
				type: 'uint256'
			}
		],
		name: 'ERC20ExceededSafeSupply',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'allowance',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'needed',
				type: 'uint256'
			}
		],
		name: 'ERC20InsufficientAllowance',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'balance',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'needed',
				type: 'uint256'
			}
		],
		name: 'ERC20InsufficientBalance',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'approver',
				type: 'address'
			}
		],
		name: 'ERC20InvalidApprover',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address'
			}
		],
		name: 'ERC20InvalidReceiver',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address'
			}
		],
		name: 'ERC20InvalidSender',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			}
		],
		name: 'ERC20InvalidSpender',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256'
			}
		],
		name: 'ERC2612ExpiredSignature',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'signer',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'ERC2612InvalidSigner',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'timepoint',
				type: 'uint256'
			},
			{
				internalType: 'uint48',
				name: 'clock',
				type: 'uint48'
			}
		],
		name: 'ERC5805FutureLookup',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ERC6372InconsistentClock',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_NULLIFIER',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_PROPOSAL_ID',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_VOTE_TYPE',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'currentNonce',
				type: 'uint256'
			}
		],
		name: 'InvalidAccountNonce',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidArrayLength',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidParameters',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MISMATCH',
		type: 'error'
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'OwnableInvalidOwner',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'OwnableUnauthorizedAccount',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'bits',
				type: 'uint8'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'SafeCastOverflowedUintDowncast',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UNAUTHORIZED',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UnauthorizedCaller',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256'
			}
		],
		name: 'VotesExpiredSignature',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ZK_PROOF_FAILED',
		type: 'error'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]'
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]'
			}
		],
		name: 'BatchMinted',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'fromDelegate',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'toDelegate',
				type: 'address'
			}
		],
		name: 'DelegateChanged',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegate',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousVotes',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newVotes',
				type: 'uint256'
			}
		],
		name: 'DelegateVotesChanged',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64'
			}
		],
		name: 'Initialized',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [],
		name: 'CLOCK_MODE',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'pure',
		type: 'function'
	},
	{
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			}
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint32',
				name: 'pos',
				type: 'uint32'
			}
		],
		name: 'checkpoints',
		outputs: [
			{
				components: [
					{
						internalType: 'uint48',
						name: '_key',
						type: 'uint48'
					},
					{
						internalType: 'uint208',
						name: '_value',
						type: 'uint208'
					}
				],
				internalType: 'struct Checkpoints.Checkpoint208',
				name: '',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'clock',
		outputs: [
			{
				internalType: 'uint48',
				name: '',
				type: 'uint48'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'delegatee',
				type: 'address'
			}
		],
		name: 'delegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'delegatee',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8'
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32'
			}
		],
		name: 'delegateBySig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'delegates',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1'
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string'
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address'
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32'
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
				type: 'uint256[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'timepoint',
				type: 'uint256'
			}
		],
		name: 'getPastTotalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'timepoint',
				type: 'uint256'
			}
		],
		name: 'getPastVotes',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'getVotes',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string'
			},
			{
				internalType: 'string',
				name: '_symbol',
				type: 'string'
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address'
			}
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'mint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'to',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]'
			}
		],
		name: 'mintBatch',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'nonces',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'numCheckpoints',
		outputs: [
			{
				internalType: 'uint32',
				name: '',
				type: 'uint32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8'
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32'
			}
		],
		name: 'permit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		stateMutability: 'payable',
		type: 'receive'
	}
]

export const GovernorABI = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [],
		name: 'CheckpointUnorderedInsertion',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'daoId',
				type: 'uint256'
			}
		],
		name: 'DAONotFound',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'daoId',
				type: 'uint256'
			}
		],
		name: 'DAO_NOT_FOUND',
		type: 'error'
	},
	{
		inputs: [],
		name: 'FailedCall',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address'
			}
		],
		name: 'GovernorAlreadyCastVote',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'GovernorAlreadyQueuedProposal',
		type: 'error'
	},
	{
		inputs: [],
		name: 'GovernorDisabledDeposit',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'proposer',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'votes',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256'
			}
		],
		name: 'GovernorInsufficientProposerVotes',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'targets',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'calldatas',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'values',
				type: 'uint256'
			}
		],
		name: 'GovernorInvalidProposalLength',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'quorumNumerator',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'quorumDenominator',
				type: 'uint256'
			}
		],
		name: 'GovernorInvalidQuorumFraction',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address'
			}
		],
		name: 'GovernorInvalidSignature',
		type: 'error'
	},
	{
		inputs: [],
		name: 'GovernorInvalidVoteParams',
		type: 'error'
	},
	{
		inputs: [],
		name: 'GovernorInvalidVoteType',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'votingPeriod',
				type: 'uint256'
			}
		],
		name: 'GovernorInvalidVotingPeriod',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'GovernorNonexistentProposal',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'GovernorNotQueuedProposal',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'GovernorOnlyExecutor',
		type: 'error'
	},
	{
		inputs: [],
		name: 'GovernorQueueNotImplemented',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'proposer',
				type: 'address'
			}
		],
		name: 'GovernorRestrictedProposer',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'GovernorUnableToCancel',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'enum IGovernor.ProposalState',
				name: 'current',
				type: 'uint8'
			},
			{
				internalType: 'bytes32',
				name: 'expectedStates',
				type: 'bytes32'
			}
		],
		name: 'GovernorUnexpectedProposalState',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_NULLIFIER',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_PROPOSAL_ID',
		type: 'error'
	},
	{
		inputs: [],
		name: 'INVALID_VOTE_TYPE',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'currentNonce',
				type: 'uint256'
			}
		],
		name: 'InvalidAccountNonce',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidArrayLength',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error'
	},
	{
		inputs: [],
		name: 'InvalidParameters',
		type: 'error'
	},
	{
		inputs: [],
		name: 'MISMATCH',
		type: 'error'
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error'
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'bits',
				type: 'uint8'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			}
		],
		name: 'SafeCastOverflowedUintDowncast',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UNAUTHORIZED',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UnauthorizedCaller',
		type: 'error'
	},
	{
		inputs: [],
		name: 'ZK_PROOF_FAILED',
		type: 'error'
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64'
			}
		],
		name: 'Initialized',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'ProposalCanceled',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'proposer',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				indexed: false,
				internalType: 'string[]',
				name: 'signatures',
				type: 'string[]'
			},
			{
				indexed: false,
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'voteStart',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'voteEnd',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'description',
				type: 'string'
			}
		],
		name: 'ProposalCreated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'ProposalExecuted',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'etaSeconds',
				type: 'uint256'
			}
		],
		name: 'ProposalQueued',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldProposalThreshold',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newProposalThreshold',
				type: 'uint256'
			}
		],
		name: 'ProposalThresholdSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldQuorumNumerator',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newQuorumNumerator',
				type: 'uint256'
			}
		],
		name: 'QuorumNumeratorUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldTimelock',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newTimelock',
				type: 'address'
			}
		],
		name: 'TimelockChange',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'weight',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'reason',
				type: 'string'
			}
		],
		name: 'VoteCast',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'weight',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'reason',
				type: 'string'
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'params',
				type: 'bytes'
			}
		],
		name: 'VoteCastWithParams',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldVotingDelay',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newVotingDelay',
				type: 'uint256'
			}
		],
		name: 'VotingDelaySet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldVotingPeriod',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newVotingPeriod',
				type: 'uint256'
			}
		],
		name: 'VotingPeriodSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'choice',
				type: 'uint8'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'weight',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nullifier',
				type: 'uint256'
			}
		],
		name: 'ZKVoteCast',
		type: 'event'
	},
	{
		inputs: [],
		name: 'BALLOT_TYPEHASH',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'CLOCK_MODE',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'COUNTING_MODE',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'pure',
		type: 'function'
	},
	{
		inputs: [],
		name: 'EXTENDED_BALLOT_TYPEHASH',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'bytes32',
				name: 'descriptionHash',
				type: 'bytes32'
			}
		],
		name: 'cancel',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			}
		],
		name: 'castVote',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				internalType: 'address',
				name: 'voter',
				type: 'address'
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes'
			}
		],
		name: 'castVoteBySig',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				internalType: 'string',
				name: 'reason',
				type: 'string'
			}
		],
		name: 'castVoteWithReason',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				internalType: 'string',
				name: 'reason',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'params',
				type: 'bytes'
			}
		],
		name: 'castVoteWithReasonAndParams',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint8',
				name: 'support',
				type: 'uint8'
			},
			{
				internalType: 'address',
				name: 'voter',
				type: 'address'
			},
			{
				internalType: 'string',
				name: 'reason',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'params',
				type: 'bytes'
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes'
			}
		],
		name: 'castVoteWithReasonAndParamsBySig',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_proposalId',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '_proof',
				type: 'bytes'
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'proposalId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256'
					},
					{
						internalType: 'uint8',
						name: 'choice',
						type: 'uint8'
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32'
					},
					{
						internalType: 'uint256',
						name: 'nullifier',
						type: 'uint256'
					}
				],
				internalType: 'struct IGovernor.PublicInputs',
				name: '_inputs',
				type: 'tuple'
			}
		],
		name: 'castZKVote',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'clock',
		outputs: [
			{
				internalType: 'uint48',
				name: '',
				type: 'uint48'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1'
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string'
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address'
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32'
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
				type: 'uint256[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'bytes32',
				name: 'descriptionHash',
				type: 'bytes32'
			}
		],
		name: 'execute',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'nullifier',
				type: 'uint256'
			}
		],
		name: 'getNullifierUsed',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'bytes32',
				name: 'descriptionHash',
				type: 'bytes32'
			}
		],
		name: 'getProposalId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'getRoot',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256'
			}
		],
		name: 'getVotes',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: 'params',
				type: 'bytes'
			}
		],
		name: 'getVotesWithParams',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'getZKVote',
		outputs: [
			{
				internalType: 'uint256',
				name: 'againstVotes',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'forVotes',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'abstainVotes',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'hasVoted',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'bytes32',
				name: 'descriptionHash',
				type: 'bytes32'
			}
		],
		name: 'hashProposal',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'pure',
		type: 'function'
	},
	{
		inputs: [],
		name: 'id',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'contract IVotes',
						name: 'token',
						type: 'address'
					},
					{
						internalType: 'contract TimelockControllerUpgradeable',
						name: 'timelock',
						type: 'address'
					},
					{
						internalType: 'uint48',
						name: 'votingDelay',
						type: 'uint48'
					},
					{
						internalType: 'uint32',
						name: 'votingPeriod',
						type: 'uint32'
					},
					{
						internalType: 'uint256',
						name: 'proposalThreshold',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'votesQuorumFraction',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256'
					}
				],
				internalType: 'struct IGovernor.GovernorInitParams',
				name: 'params',
				type: 'tuple'
			},
			{
				internalType: 'contract IVerifier',
				name: '_verifier',
				type: 'address'
			}
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'isWaitingMerkle',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'nonces',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes'
			}
		],
		name: 'onERC1155BatchReceived',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes'
			}
		],
		name: 'onERC1155Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes'
			}
		],
		name: 'onERC721Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalDeadline',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalEta',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalNeedsQueuing',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalProposer',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalSnapshot',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'proposalThreshold',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'proposalVotes',
		outputs: [
			{
				internalType: 'uint256',
				name: 'againstVotes',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'forVotes',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'abstainVotes',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'string',
				name: 'description',
				type: 'string'
			}
		],
		name: 'propose',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]'
			},
			{
				internalType: 'bytes32',
				name: 'descriptionHash',
				type: 'bytes32'
			}
		],
		name: 'queue',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256'
			}
		],
		name: 'quorum',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'quorumDenominator',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'timepoint',
				type: 'uint256'
			}
		],
		name: 'quorumNumerator',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'quorumNumerator',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes'
			}
		],
		name: 'relay',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newProposalThreshold',
				type: 'uint256'
			}
		],
		name: 'setProposalThreshold',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			},
			{
				internalType: 'bytes32',
				name: 'root',
				type: 'bytes32'
			}
		],
		name: 'setRoot',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint48',
				name: 'newVotingDelay',
				type: 'uint48'
			}
		],
		name: 'setVotingDelay',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint32',
				name: 'newVotingPeriod',
				type: 'uint32'
			}
		],
		name: 'setVotingPeriod',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'proposalId',
				type: 'uint256'
			}
		],
		name: 'state',
		outputs: [
			{
				internalType: 'enum IGovernor.ProposalState',
				name: '',
				type: 'uint8'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4'
			}
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'timelock',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'token',
		outputs: [
			{
				internalType: 'contract IERC5805',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newQuorumNumerator',
				type: 'uint256'
			}
		],
		name: 'updateQuorumNumerator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'contract TimelockControllerUpgradeable',
				name: 'newTimelock',
				type: 'address'
			}
		],
		name: 'updateTimelock',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'verifier',
		outputs: [
			{
				internalType: 'contract IVerifier',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'version',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'votingDelay',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'votingPeriod',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'zkDao',
		outputs: [
			{
				internalType: 'contract IZKDAO',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		stateMutability: 'payable',
		type: 'receive'
	}
]
