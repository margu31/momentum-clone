import React, { useEffect, useState } from 'react';
import getList from './getList';
import styled from 'styled-components';

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;

export default function PhotoList() {
  const [List, setList] = useState(null);

  useEffect(() => {
    const getfetch = async () => {
      const data = await getList();
      setList(data);
    };
    getfetch();
  }, []);

  if (!List) {
    return null;
  }

  return (
    <>
      <Img src={List[0].urls.full}></Img>
    </>
  );
}
