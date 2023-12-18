import React from 'react';
import styled from 'styled-components';
import ItemContainer from '../component/ItemContainer';

import Layout from '../component/layout/Layout';
import CarouselItemHome from '../component/Carouse/CarouseItemHome';
import CommentArea from '../component/CommentArea';

import { Divider } from 'antd';

const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  margin: 10px;
`;
const Block = styled.div`
  border: 0px;
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Tittle = styled.div`
  margin: 5px;
`;
const Home = (props) => {
  const dataBase = props.data;
  const displayData = [
    { images: ['./img/banner1.jpg'] },
    { images: ['./img/banner2.jpg'] },
    { images: ['./img/banner3.jpg'] },
  ];

  return (
    <Layout>
      <div>
        <CarouselItemHome data={displayData} />
        <Block>
          <Tittle>
            <h2>Typical Product</h2>
            <Divider />
          </Tittle>
          <ItemArea>
            {dataBase.map((item, index) => {
              if (index < 4) {
                return <ItemContainer data={item} key={index} />;
              }
              return <></>;
            })}
          </ItemArea>
        </Block>
        <Block>
          <Tittle>
            <h2>Customer Reviews</h2>
          </Tittle>
          {/* <ItemArea>
            
            {dataBase.map((item, index) => {
              if (index >= 3 && index < 6) {
                return (
                  <ItemContainer
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                    id={item.id}
                  />
                );
              }
              return <></>;
            })}
          </ItemArea>
          <ItemArea>
           
            {dataBase.map((item, index) => {
              if (index >= 6 && index < 9) {
                return (
                  <ItemContainer
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.images[0]}
                    id={item.id}
                  />
                );
              }
              return <></>;
            })}
          </ItemArea> */}
          <CommentArea />
        </Block>
      </div>
    </Layout>
  );
};

export default Home;
