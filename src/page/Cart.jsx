import { Flex, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useContext, useEffect, useState } from 'react';
import { BsFillReplyFill } from 'react-icons/bs';
import { CiTrash } from 'react-icons/ci';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../App';
import Layout from '../component/layout/Layout';

import ItemContainer from '../component/ItemContainer';
import CartTotal from '../component/layout/CartTotal';
const { Text } = Typography;

export const ProductImage = styled.img`
  width: 90px;
  height: 80px;
  cursor: pointer;
`;
export const Des = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  width: 180px;
  height: 40px;
  border-radius: 1.5px;
  padding-top: 13px;
  margin: auto 20px;
  color: #333333;
  cursor: pointer;
  @media (max-width: 576px) {
    margin: 0px;
  }
`;

export const Amount = styled.div`
  border: none;
  outline: none;
  width: 30px;
  text-align: center;
  height: 23.5px;
`;

const NamePage = styled.p`
  margin-top: 3px;
  margin-bottom: 0px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const AmountButton = styled.div`
  text-align: center;
  width: 25px;
  height: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
`;
const ContinueShopping = styled.a`
  padding: 9px 0px;
  text-decoration: none;
  display: inline-block;
  border-radius: 90px;
  width: 250px;
  height: 45px;
  background-color: black;
  color: white;
  border: none;
  transition: background-color 0.4s linear;
  font-size: 16px;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;
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
const ListRender = styled.li`
  list-style-type: none;
  font-weight: lighter;
`;
const TitleAndAmount = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    height: 80px;
    margin-left: 10px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    height: 50px;
  }
`;
const InitPrice = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-right: 50px;
  font-size: 13px;
  @media (max-width: 576px) {
    margin: 0px;
    text-align: left;
  }
`;
const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Notice = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 576px) {
    justify-content: space-around;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    justify-content: space-around;
  }
`;
const NoteContain = styled.div`
  width: 320px;
  @media (max-width: 576px) {
    width: 82%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 90% !important;
  }
`;
const CartTotalContainer = styled.div`
  @media (max-width: 576px) {
    width: 82%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 88%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 86.5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 74%;
  }
`;
const TotalPrice = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-left: 20px;
  font-size: 13px;
  @media (min-width: 600px) and (max-width: 800px) {
    display: flex;
    width: 100%;
    margin: 0px;
    justify-content: space-around;
    padding-right: 6px;
  }
`;
const Block = styled.div`
  display: flex;
  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Cart = (props) => {
  const naPage = useNavigate();
  let cartData = JSON.parse(window.localStorage.getItem('cartData'));
  const tmp = useContext(DataContext);

  useEffect(() => {
    tmp.method(cartData.data);
  }, []);
  const onDetail = (item) => {
    console.log('vao  click' + item);
    if (item > 0) {
      item--;
    }
    naPage(`/${item}`);
    // console.log(nextPage);
  };

  const randomItems = [];
  let suggestedItem = [];

  for (let i = 0; suggestedItem.length < 8; i++) {
    randomItems.push(props.data[Math.floor(Math.random() * props.data.length)]);
    suggestedItem = [...new Set(randomItems)];
  }

  const [changeVar, setChangeVar] = useState(false);
  useEffect(() => {
    // window.localStorage.setItem("cartData",JSON.stringify({"data":cartData.data}));
    // cartData = JSON.parse(window.localStorage.getItem("cartData"));
    console.log('vao effect');
    // console.log(randomItems);
    // console.log(suggestedItem);
  }, [changeVar]);

  let dataBase = cartData.data;

  const [cart, setCart] = useState(dataBase);
  useEffect(() => {
    setCart(cartData.data);
    console.log(cart.length);
  }, [tmp.data]);

  const updateCart = [...cart];

  const ruleBackProduct = [
    'Products can only be exchanged once',
    'Full price products can be exchanged within 07 days throughout the system',
    'Sale products only support size exchange (if the store has stock) for 07 days throughout the system',
    'The product still has all tags and has not been used.',
  ];
  // tăng số lượng sản phẩm
  const increaseQuantity = (item) => {
    console.log('increase');

    const indexItem = cart.indexOf(item);
    updateCart[indexItem].amount++;
    cartData = { data: [...updateCart] };
    tmp.method([...cartData.data]);
    window.localStorage.setItem('cartData', JSON.stringify({ data: cartData.data }));
    setChangeVar(!changeVar);
  };
  // giảm số lượng sản phẩm
  const decreaseQuantity = (item) => {
    console.log('decrease');
    setChangeVar(!changeVar);
    const indexItem = cart.indexOf(item);
    if (updateCart[indexItem].amount !== 1) {
      updateCart[indexItem].amount--;
    } else {
      updateCart[indexItem].amount = 1;
    }
    cartData = { data: [...updateCart] };
    tmp.method([...cartData.data]);
    window.localStorage.setItem('cartData', JSON.stringify({ data: cartData.data }));
  };
  //  console.log(cart)
  // xóa sp
  const removeItem = (item) => {
    console.log(item);
    const updatedCart = dataBase.filter((cartItem) => cartItem.id !== item.id);

    cartData = { data: [...updatedCart] };
    console.log(cartData);
    tmp.method([...cartData.data]);
    window.localStorage.setItem('cartData', JSON.stringify({ data: cartData.data }));
    setChangeVar(!changeVar);
  };
  // tính tổng tiền
  const toTalProduct = () => {
    const sum = dataBase.reduce((total, item) => {
      let productAmount;
      if (item.hasOwnProperty('discount')) {
        productAmount = item.discount * item.amount;
      } else {
        productAmount = item.price * item.amount;
      }
      return total + productAmount;
    }, 0);
    return Number(sum.toFixed(3));
  };
  // tính tổng số lượng sp
  const toTalAmount = () => {
    const sum = dataBase.reduce((total, item) => total + item.amount, 0);
    return sum;
  };
  // hiện số tiền chính khi có discount
  const hasDiscount = (item, key) => {
    if (item.hasOwnProperty(key)) {
      return (
        <>
          <div>
            <Text style={{ fontSize: '16px', color: '#a73340', fontWeight: 'bold' }}>
              ${item.discount}
            </Text>
          </div>
          <div>
            <Text delete>${item.price}</Text>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <Text style={{ fontSize: '16px' }}>${item.price}</Text>
        </div>
      );
    }
  };
  // tính tiền khi có discount
  const amountWhenHasDiscount = (item, key) => {
    if (item.hasOwnProperty(key)) {
      return <>{item.amount * item.discount}</>;
    } else {
      return <>{item.amount * item.price}</>;
    }
  };

  return (
    <Layout>
      {/* nav */}
      {/* layout giỏ hàng khi có sp  */}
      {cart.length > 0 ? (
        <Flex wrap="wrap" justify="space-evenly">
          <div>
            <NamePage>YOUR CART</NamePage>
            <div style={{ marginTop: '25px' }}>
              {cart.map((item) => {
                const { id, images, title, amount } = item;

                return (
                  <ContainerProduct>
                    <Flex
                      wrap="wrap"
                      justify="space-evenly"
                      key={id}
                      style={{ marginBottom: '17px' }}
                    >
                      <ProductImage src={images} alt="" onClick={() => onDetail(id)} />

                      <Block>
                        <TitleAndAmount>
                          <Des onClick={() => onDetail(id)}>{title}</Des>
                          <InitPrice>{hasDiscount(item, 'discount')}</InitPrice>
                          <Flex align="center">
                            <div
                              style={{
                                border: '1px solid grey',
                                display: 'flex',
                                marginTop: '7px',
                                marginRight: '35px',
                              }}
                            >
                              <AmountButton
                                onClick={() => decreaseQuantity(item)}
                                style={{ borderRight: '1px solid grey' }}
                              >
                                -
                              </AmountButton>
                              <Amount>{amount}</Amount>
                              <AmountButton
                                onClick={() => increaseQuantity(item)}
                                style={{ borderLeft: '1px solid grey' }}
                              >
                                +
                              </AmountButton>
                            </div>
                          </Flex>
                        </TitleAndAmount>

                        <TotalPrice>
                          <div>
                            <Text type="secondary">Amount</Text>
                          </div>
                          <span style={{ color: '#a73340', fontWeight: 'bold', fontSize: '15px' }}>
                            ${amountWhenHasDiscount(item, 'discount')}
                          </span>
                          <div onClick={() => removeItem(item)}>
                            <CiTrash size={18} style={{ cursor: 'pointer' }}></CiTrash>
                          </div>
                        </TotalPrice>
                      </Block>
                    </Flex>
                  </ContainerProduct>
                );
              })}
            </div>
            <Notice>
              <NoteContain>
                <p style={{ fontWeight: 'bold' }}>Order notes</p>
                <TextArea rows={5} placeholder="Your notes" />
              </NoteContain>
              <NoteContain style={{ width: '400px' }}>
                <p style={{ fontWeight: 'bold' }}> Exchange/Return Policy</p>
                {ruleBackProduct.map((item) => {
                  return (
                    <ListRender key={item}>
                      <HiOutlineArrowNarrowRight /> {item}
                    </ListRender>
                  );
                })}
              </NoteContain>
            </Notice>
          </div>

          <CartTotalContainer>
            <Link
              style={{
                display: 'flex',
                justifyContent: 'right',
                color: 'black',
                fontWeight: 'lighter',
                marginBottom: '5px',
              }}
              to="/product"
            >
              Continue Shopping
              <HiArrowLongRight style={{ marginTop: '5px', marginLeft: '5px' }} />
            </Link>
            <CartTotal
              posi="sticky"
              posiTop="32px"
              sumAmount={toTalAmount}
              sumProduct={() => toTalProduct(cart, 'discount')}
            />
          </CartTotalContainer>
        </Flex>
      ) : (
        // layout giỏ hàng khi không có sp
        <div>
          <Flex wrap="wrap" justify="space-evenly">
            <div style={{ flex: 0.95 }}>
              <NamePage>YOUR CART</NamePage>
              <p style={{ textAlign: 'center', fontWeight: 'lighter', fontSize: '17px' }}>
                Your shopping cart is empty
              </p>
              <div style={{ textAlign: 'center' }}>
                <ContinueShopping href="/">
                  <BsFillReplyFill /> CONTINUE SHOPPING
                </ContinueShopping>
              </div>
            </div>
            <div style={{ width: '330px', height: '160px', marginTop: '15px' }}>
              <CartTotal sumAmount={toTalAmount} sumProduct={toTalProduct} />
            </div>
          </Flex>
          <div>
            <Flex style={{ margin: '0px 20px' }} justify="space-between">
              <div>
                <span style={{ fontSize: '22px', fontWeight: 'lighter' }}>RECOMMENDED FOR YOU</span>
              </div>
              <div style={{ marginTop: '3px' }}>
                <Link style={{ fontSize: '22px' }} to="/product#Best Seller">
                  See More
                </Link>
              </div>
            </Flex>
            <ItemArea>
              {suggestedItem.map((item, index) => {
                if (index <= 3) return <ItemContainer data={item} key={index} />;
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {suggestedItem.map((item, index) => {
                if (index >= 4) return <ItemContainer data={item} key={index} />;
                return <></>;
              })}
            </ItemArea>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Cart;
