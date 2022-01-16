import {
  callReadOnlyFunction,
  bufferCVFromString,
  cvToJSON,
} from '@stacks/transactions';
('@stacks/network');
// mainnet bns contract address
const BNS_CONTRACT_ADDRESS = 'SP000000000000000000002Q6VF78';
const BNS_CONTRACT_NAME = 'bns';
import { StacksMainnet } from '@stacks/network';

const readContract = async () => {
  // convert to Clarity values
  const functionArgs = [
    bufferCVFromString('btc'),
    bufferCVFromString('blogging'),
  ];
  const network = new StacksMainnet();

  try {
    const result = await callReadOnlyFunction({
      contractAddress: BNS_CONTRACT_ADDRESS,
      contractName: BNS_CONTRACT_NAME,
      functionName: 'name-resolve',
      functionArgs,
      network,
      senderAddress: BNS_CONTRACT_ADDRESS,
    });
    const expDate = cvToJSON(result).value.value;
    // 2013 = ERR_NAME_NOT_FOUND
    return expDate == 2013 ? expDate : false;
  } catch (e) {
    console.error(e);
  }
};

export default readContract;
