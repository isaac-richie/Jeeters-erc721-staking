import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xE99d41b59e9D2E75A8BAeAF382105afDCc31fe4B";
const rewardTokenContractAddress = "0xd886389095117248C7F201fA814dfeb21Da3Dd54";
const stakingContractAddress = "0xA3156F35068C09cB1eEEcd5CBD6ABD89f7Bd33B5";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});