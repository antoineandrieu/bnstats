const FIRST_BLOCK_TIME = 1610616504000; // January 14th, 2021
const BLOCK_TIME = 600;

const convertDate = (height: number) => {
  return new Date(FIRST_BLOCK_TIME + height * BLOCK_TIME * 1000);
};

export default convertDate;
