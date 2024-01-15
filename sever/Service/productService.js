import databaseProject from "../mongodb.js"

export const getAllProduct= async (req,res)=>{
    
    if(Object.keys(req.query).length>0){
        if(req.query.brands){
            const brands=decodeURIComponent(req.query.brands);
            const filterData=await databaseProject.inventory.find({brands:brands}).toArray();
            return res.json(filterData);
        }
        if(req.query.type){
            const type=decodeURIComponent(req.query.type)
            const filterData=await databaseProject.inventory.find({product_type:type}).toArray();
            return res.json(filterData);
        }
    }
    else{
        const data=await databaseProject.inventory.find().toArray();
        
        return res.json(data)
    }
    
}
export const getAllBrands=async (req,res)=>{
    const data=await databaseProject.inventory.find({},{projection:{brands:1}}).toArray();
    
    let brandList=[]
    for (let index = 0; index < data.length; index++) {
        let element = data[index].brands;
        let isAdded= true;
        for (let index1 = 0; index1 < brandList.length; index1++) {
            let element1 = brandList[index1].brands;
            console.log(element1);
            if(element == element1){
                isAdded=false;
                break;
            }
        }
        if(isAdded == true){
            let tmp ={brands:element}
            if(element != null){
                brandList.push((tmp));
            }
            
        }
    }
    
    return res.json(brandList);
}
export const getAllTypes=async (req,res)=>{
    const data=await databaseProject.inventory.find({},{projection:{product_type:1}}).toArray();
    let typeList=[]
    for (let index = 0; index < data.length; index++) {
        let element = data[index].product_type;
        let isAdded= true;
        for (let index1 = 0; index1 < typeList.length; index1++) {
            let element1 = typeList[index1].type;
            if(element == element1){
                isAdded=false;
                break;
            }
        }
        if(isAdded == true){
            let tmp ={type:element}
            if(element != null){
                typeList.push(tmp);
            }
            
        }
    }
    return res.json(typeList);
}

export const getOneProduct=async (req,res)=>{
    const productID= req.params.id;
   
    const productDetail=await databaseProject.inventory.findOne({ product_id:(productID)});
    console.log(productDetail);
    
    return res.json(productDetail)
}
// export const getOneBrands=async (req,res)=>{
//     const brandName=req.params.name;
//     const brandsItemList=await databaseProject.inventory.find({brands:brandName}).toArray();
//     return res.json(brandsItemList);
// }
export const addToCart=async (req,res)=>{
    const productID=req.query.productID;
    const userID=req.query.userID;
    console.log(userID);
    const userDetail=await databaseProject.cart.findOne({userId:userID});
   
    if(userDetail){
        const inCart=userDetail.cart.filter((item)=>{
            return item.product_id== productID
        });
        console.log(inCart);
        const newIndex=userDetail.cart.indexOf(inCart[0]);
        if(inCart.length>0){
            userDetail.cart[newIndex].quantity=inCart[0].quantity+1;
            await databaseProject.cart.updateOne({userId:userID},{$set:{cart:userDetail.cart}});
        }
        else{
            userDetail.cart.push({product_id:productID,quantity:1})
            await databaseProject.cart.updateOne({userId:userID},{$set:{cart:userDetail.cart}});
        }
    }
    else{
        await databaseProject.cart.insertOne({cart:[{product_id:productID,quantity:1}],userId:userID});
    }
    // if(productDetail){
    //     await databaseProject.cart.updateOne({product_id:productID},{$set:{quantity:productDetail.quantity+1}})
    // }
    // else{
    //     const itemDetail=await databaseProject.inventory.findOne({product_id:productID});
    //     await databaseProject.cart.insertOne({product_id:productID,brands:itemDetail.brands,product_name:itemDetail.product_name,price:itemDetail.price,quantity:1});
    // }
    
   
    return res.json("complete");
}
export const getAllCart=async (req,res)=>{
    const itemList=await databaseProject.cart.aggregate([
        {
          '$match': {}
        }, {
          '$lookup': {
            'from': 'inventory', 
            'localField': 'cart.product_id', 
            'foreignField': 'product_id', 
            'as': 'product_des'
          }
        }
      ]).toArray();

    return res.json(itemList)
}
