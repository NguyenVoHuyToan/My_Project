import React from 'react';
import ItemContainer from '../component/ItemContainer';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import ScrollToTopButton from '../component/ScrollToTop';
import './Product.css';
import { Divider } from 'antd';
import CarouselItemHome from '../component/Carouse/CarouseItemHome';
import Navigation from '../component/Navigation';
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 5px;
  margin-bottom: 30px;
  height: fit-content;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Block1 = styled.div`
  padding-top: 100px;
`;
const Tittle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  justify-content: space-between;
  padding-top: 20px;
`;

const Product = (props) => {
  const dataBase = props.data;
  const displayData = [
    { images: ['./img/banner1.jpg'] },
    { images: ['./img/banner2.jpg'] },
    { images: ['./img/banner3.jpg'] },
  ];
  return (
    <div>
      <Layout>
        <CarouselItemHome data={displayData} />
        <div className="section_card contain">
          <Navigation />
          <Block1>
            <Tittle>
              <h2 className="section-title" id="collection">
                LASTEST COLLECTION
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index < 3) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Best Seller">
                BEST SELLER
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 4 && index < 9) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 9 && index < 14) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Bedding">
                BEDDING PRODUCTS
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 14 && index < 19) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 18 && index < 23) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Sofa">
                Sofa Products
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 23 && index < 28) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 28 && index < 33) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Desk">
                DESK PRODUCTS
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 33 && index < 38) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 38 && index < 43) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Dining">
                DINING TABLE PRODUCTS
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 43 && index < 48) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 48 && index < 53) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Cabinet">
                SHOE CABINET
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 53 && index < 58) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 58 && index < 63) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="Makeup">
                MAKEUP TABLE
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 63 && index < 68) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 68 && index < 73) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="chair">
                CHAIRS
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 73 && index < 78) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 78 && index < 83) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <Block1>
            <Tittle>
              <h2 className="section-title" id="vanity">
                BATHROOM VANITY
              </h2>
              <span>ESSENTIAL ITEMS</span>
              <Divider />
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 83 && index < 88) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index > 88 && index < 93) {
                  return <ItemContainer data={item} key={index} />;
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
          <ScrollToTopButton />
        </div>
      </Layout>
    </div>
  );
};

export default Product;
