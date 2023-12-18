import React, { useRef, useState } from 'react';
import { Form, Input,  Radio, Typography } from 'antd';

import { Des, ProductImage } from './Cart';
import styled from 'styled-components';

import { useNavigate } from 'react-router';

import Layout from '../component/layout/Layout';
import PayPrice from '../component/layout/PayPrice';
import Swal from 'sweetalert2';
const { Text } = Typography;
const Block=styled.div`
    display:flex;
    flex-direction:column;
    
`;

export const Title = styled.h2`
  margin-top: 7px;
  margin-bottom: 0px;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: #333333;
  display: inline-block;
`;
const ScrollableContainer = styled.div`
  width: 300px;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: gray lightgray;
  @media (max-width: 600px) {
    width:100%;
  }
`;
const NameBrand = styled.h2`
  color: #333333;
  text-align: center;
  margin-top: 70px;
`;
const AmountBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0px;
`;
const PayMethod = styled.p`
  color: grey;
  font-size: 16px;
  display: inline-block;
  margin: auto 7px;
`;
const MethodAndPay = styled.div`
width: 100%;
  display: flex;
  
  justify-content: space-around;
  flex-direction:row;
  margin-bottom: 30px;
  @media (max-width:768px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  @media (min-width:769px ) and (max-width: 992px) {
    justify-content: space-between;
  }
  @media (min-width:992px ) and (max-width: 1200px) {
  justify-content: space-between;
  padding: 0px 65px;
  }
`;
const PayButton = styled.button`
  min-width: 300px;
  margin-top: 10px;
  height: 45px;
  font-size: 17px;
  background-color: #01152e;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  color: white;
`;
const PaymentForm = () => {
  const initialForm = {
    name: '',
    phone: '',
    address: '',
    email: '',
  };
  const [infoForm, setForm] = useState(initialForm);
  const [radioChecked, setRadioChecked] = useState(false);
  const { name, phone, address, email } = infoForm;
  let cartData = JSON.parse(window.localStorage.getItem('cartData'));
 
  let dataBase = cartData.data;

  // console.log(dataBase)
  const onFinish = (values) => {
    console.log('Received values:', values);
    //   You can handle the form submission and payment processing here.
  };
  const checkRadioChecked = () => {
    setRadioChecked(radioRef.current.checked);
  };
  const radioRef = useRef(null);
  const handleChange = (key, event) => {
    const value = event.target.value;
    setForm({ ...infoForm, [key]: value });
    // console.log(key, event)
  };
  const naPage = useNavigate();
  const onClickButton = () => {
    let swalShown = false;
    if (!name || !email || !address || Number(phone) < 0) {
      alert('Invalid content');
    } else if (radioChecked === false) {
      alert('Please select a payment method.');
      return;
    } else {
      Swal.fire({
        title: 'Order Success',
        text: 'Order will be delivered within 2 hours.',
        icon: 'success',
        confirmButtonText: 'Back to Home',
        didOpen: () => {
          swalShown = true;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          naPage(`/`);
        }
      });
      window.localStorage.setItem('cartData', JSON.stringify({ data: [] }));
      setTimeout(() => {
        if (swalShown) {
          Swal.close();
          naPage(`/`);
        }
      }, 3000);
    }
  };
  // hiện số tiền chính khi có discount
  const hasDiscount = (item, key) => {
    if (item.hasOwnProperty(key)) {
      return (
        <>
          <div style={{ paddingLeft: '5px' }}>
            <div>
              <Text delete>${item.price}</Text>
            </div>
            <div>
              <Text style={{ color: '#a73340', fontWeight: 'bold' }}>${item.discount}</Text>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div style={{ paddingLeft: '5px' }}>
          <Text style={{ fontSize: '16px' }}>${item.price}</Text>
        </div>
      );
    }
  };
  // tổng tiền khi có discount
  const toTalProduct = () => {
    const sum = dataBase.reduce((total, item) => {
      let productAmount;
      if (item.hasOwnProperty('discount')) {
        productAmount = Number(item.discount) * Number(item.amount);
      } else {
        productAmount = Number(item.price) * Number(item.amount);
      }
      return total + productAmount;
    }, 0);
    return Number((sum).toFixed(3));
  };
  return (
    <Layout>
      <NameBrand>KONSEPT HOMEPLUS</NameBrand>
      <Block>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <div>
          <Title style={{ fontSize: '20px' }}>Delivery information </Title>
          <Form
            style={{ marginTop: '20px' }}
            name="payment-form"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="cardholderName"
              rules={[
                {
                  required: true,
                  message: 'Please Enter Name',
                },
                {
                  pattern: /^[A-Za-z\s]+$/,
                  message: 'Please enter letters only',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your name"
                onChange={(e) => handleChange('name', e)}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please Enter the phone number',
                },
                {
                  pattern: /^[0-9]+$/,
                  message: 'Please Enter a valid phone number',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Phone number"
                onChange={(e) => handleChange('phone', e)}
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please Enter your address',
                },
              ]}
            >
              <Input
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your address"
                onChange={(e) => handleChange('address', e)}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please Enter your email',
                },
              ]}
            >
              <Input
                type="email"
                style={{ width: '500px', height: '45px' }}
                spellCheck="false"
                placeholder="Your email"
                onChange={(e) => handleChange('email', e)}
              />
            </Form.Item>
          </Form>
         
        </div>

        <div>
          <Title style={{ fontSize: '20px' }}>Products</Title>

          <ScrollableContainer>
            {dataBase.map((item) => {
              const { id, images, title, amount, price } = item;
              return (
                <div
                  key={id}
                  style={{ display: 'flex', alignItems: 'center', margin: '10px auto' }}
                >
                  <ProductImage
                    style={{ width: '60px', height: '60px', cursor: 'auto' }}
                    src={images}
                    alt=""
                  />
                  <div style={{ width: '200px' }}>
                    <Des
                      style={{
                        fontSize: '14px',
                        cursor: 'auto',
                        padding: ' 5px',
                        margin: '0px',
                        height: 'fit-content',
                      }}
                    >
                      {title}
                    </Des>
                    <AmountBlock>
                      {/* <Text style={{ paddingLeft: '5px' }}>${price}</Text>
                      <Text>x{amount}</Text> */}
                      <div style={{ paddingLeft: '5px' }}>{hasDiscount(item, 'discount')}</div>
                      <Text>x{amount}</Text>
                    </AmountBlock>
                  </div>
                </div>
              );
            })}
          </ScrollableContainer>
          <hr style={{ color: '#333333', width: '100%', marginTop: '15px' }}></hr>

          <PayPrice title="Provisional invoice" price={toTalProduct()} />
          <PayPrice title="Transport fee" price="5.00" />
          <PayPrice title="Total" price={Number((toTalProduct() + Number(5.0)).toFixed(3))} />
        </div>
        
      </div>
<div>
  
</div>
      <MethodAndPay>
      <div>
          <Title style={{ fontSize: '20px' }}>Payment methods:</Title>
          <br></br>
          <Radio onClick={checkRadioChecked} ref={radioRef}>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: 'auto' }}>
                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" alt='#'/>
              </div>
              <PayMethod>Cash On Delivery (COD)</PayMethod>
            </div>
          </Radio>
        </div>
        <div>
          <PayButton
            onClick={() => {
              onClickButton();
            }}
          >
            PAY NOW
          </PayButton>
        </div>
      </MethodAndPay>
      </Block>
    </Layout>
  );
};

export default PaymentForm;
