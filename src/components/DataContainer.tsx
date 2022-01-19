import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DataContainerProps {
  isLoading: boolean;
  expDate: string;
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DataContainer: FC<DataContainerProps> = (props: DataContainerProps) => {
  const { isLoading, expDate } = props;
  const [data, setData] = useState('');

  useEffect(() => {
    if (expDate) {
      setData(`expires at ${expDate}`);
    }
  }, [expDate]);

  return <MainContainer>{isLoading ? 'loading...' : data}</MainContainer>;
};

export default DataContainer;
