import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

type Info = {name: string};
type DataList = Array<Info>;

const List = ({ list }:{ list: DataList }) => {
  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <ul>
        {
          list.map((elem:Info) => {
            return <li key={elem.name}>name: {elem.name}</li>
          })
        }
      </ul>
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
