import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import styled, { css } from 'styled-components';

type Info = {name: string};
type DataList = Array<Info>;

const LI = styled.li`
  color: #888888;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const List = ({ list }:{ list: DataList }) => {
  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <div css={flexCenter}>
        <ul>
          {
            list.map((elem:Info) => {
              return <LI key={elem.name}>name: {elem.name}</LI>
            })
          }
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/data');
  const list = await res.json();
  return {
    props: {
      list
    }
  };
}

export default List;
