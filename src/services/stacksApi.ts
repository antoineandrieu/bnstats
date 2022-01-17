import { StacksMainnet } from '@stacks/network';
import {
  bufferCVFromString,
  callReadOnlyFunction,
  cvToJSON,
} from '@stacks/transactions';

// mainnet bns contract address
const BNS_CONTRACT_ADDRESS = 'SP000000000000000000002Q6VF78';
const BNS_CONTRACT_NAME = 'bns';

const readContract = async (username: string, namespace: string) => {
  // convert to Clarity values
  const functionArgs = [
    bufferCVFromString(namespace),
    bufferCVFromString(username),
  ];
  const network = new StacksMainnet();

  try {
    const cvResult = await callReadOnlyFunction({
      contractAddress: BNS_CONTRACT_ADDRESS,
      contractName: BNS_CONTRACT_NAME,
      functionName: 'name-resolve',
      functionArgs,
      network,
      senderAddress: BNS_CONTRACT_ADDRESS,
    });
    const result = cvToJSON(cvResult).value.value;
    // 2013 = ERR_NAME_NOT_FOUND
    return result != 2013 ? result : false;
  } catch (e) {
    console.error(e);
  }
};

export default readContract;
