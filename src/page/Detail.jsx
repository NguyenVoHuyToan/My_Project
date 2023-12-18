import React, { useContext, useEffect } from 'react';
import { Button, Descriptions, Image } from 'antd';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import {  useParams } from 'react-router';
import { DataContext } from '../App';
import ItemContainer from '../component/ItemContainer';


const Container=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    justify-content:center;
    
    margin:10px;
    @media (max-width: 600px) {
      display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    }
`;
const ImgContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin:10px;
    @media (max-width: 600px) {
      display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    }
`;
const DescripBlock=styled.div`
    width:40%;
    
    @media (max-width: 600px) {
      width:100%;
      margin-top:10px;
    }
`;
const randomID=[Math.floor(Math.random() * 41),Math.floor(Math.random() * 41),Math.floor(Math.random() * 41)];
const Detail = (props) =>{ 
  
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  const urlData=useParams();
  const itemID=urlData.productID;
  console.log(itemID);
 
  const dataBase=props.data;
  console.log(props);
  const imgData=dataBase[itemID].images[0];
  
  const titleData=dataBase[itemID].title;
  let amountData=dataBase[itemID].amount;
  let cartData = JSON.parse(window.localStorage.getItem("cartData"));

  let isExist=false;
 
  

 const tmp=useContext(DataContext);

  
  useEffect(()=>{
    tmp.method(cartData.data)
  },[])
  let a = cartData.data.findIndex((item) => {
    return item.id === Number(itemID)+1;
  });
  if (a >= 0) {
    isExist = true;
  }
  
  const addToCart = () => {
    alert(`Add to cart: ${titleData}` )
    if (isExist) {
      cartData.data[a].amount = amountData+1;
      
    } else {
      cartData={"data":[...cartData.data, dataBase[itemID]]};
      
    }
    tmp.method([...cartData.data]);
    
    window.localStorage.setItem("cartData",JSON.stringify(cartData));
   
  };


  const items = [
    {
      key: '1',
      label: 'Name',
      children: <strong>{titleData}</strong> ,
    },
    {
      key: '2',
      label: 'ID',
      children: dataBase[itemID].id,
    },
    {
      key: '3',
      label: 'Category',
      children: dataBase[itemID].category,
    },
    {
      key:'4',
      label:'Description',
      span:6,
      children:` Laboris ullamco cillum ut exercitation mollit sit tempor commodo
      dolor laboris commodo. Laborum mollit veniam consequat sunt
      nostrud mollit aliquip excepteur est Lorem deserunt. Ullamco sunt
      id laborum incididunt.`,
    },
    {
      key: '5',
      label: 'Price',
      children: dataBase[itemID].discount ? (
        <>
          <span style={{ textDecoration: 'line-through', marginRight: '5px',fontSize:"20px" }}>
            ${dataBase[itemID].price}
          </span>
          <span style={{fontSize:"20px"}}>${dataBase[itemID].discount}</span>
        </>
      ) : (
        <span>${dataBase[itemID].price}</span>
      ),
    },
    
  ];
  return(
    <Layout>
      <Container>
      <Image
    width={400}
    height={380}
    src={imgData}
    />
      <DescripBlock> <Descriptions  labelStyle={{color:"green"}} column={3}  layout="vertical" size='middle' items={items} />
        <Button onClick={addToCart} className='buttonClass'>Add To Cart</Button>
      </DescripBlock>
      </Container>
      <h2>Related Product</h2>
      <ImgContainer>
        {/* <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/>
        <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/>
        <Image src={dataBase[Math.floor(Math.random() * 41)].images[0]} width={400} height={300}/> */}
        <ItemContainer data={dataBase[randomID[0]]} key={randomID[0]}/>
        <ItemContainer data={dataBase[randomID[1]]} key={randomID[1]}/>
        <ItemContainer data={dataBase[randomID[2]]} key={randomID[2]}/>
      </ImgContainer>
      
    </Layout>
  
  );

}
export default Detail;