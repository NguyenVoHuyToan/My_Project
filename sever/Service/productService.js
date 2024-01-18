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
   
    
    return res.json(productDetail)
}
// export const getOneBrands=async (req,res)=>{
//     const brandName=req.params.name;
//     const brandsItemList=await databaseProject.inventory.find({brands:brandName}).toArray();
//     return res.json(brandsItemList);
// }
export const addToCart=async (req,res)=>{
    const productID=req.body.productId;
    const userEmail=req.userEmail;
    const newQuantity=req.body.quantity;
    console.log(newQuantity);
    console.log(req.body.productId);
    const userDetail=await databaseProject.cart.findOne({userEmail:userEmail});
   
    if(productID == "undefined"  || userDetail=="undefined"){
        throw new Error("productID or email is wrong");
    }
    else{
        if(userDetail){
            const inCart=userDetail.cart.filter((item)=>{
                return item.product_id== productID
            });
            console.log(inCart);
            const newIndex=userDetail.cart.indexOf(inCart[0]);
            if(inCart.length>0){
                if(newQuantity){
                    userDetail.cart[newIndex].quantity=newQuantity;
                await databaseProject.cart.updateOne({userEmail:userEmail},{$set:{cart:userDetail.cart}});
                }
                else{
                    userDetail.cart[newIndex].quantity=inCart[0].quantity+1;
                    await databaseProject.cart.updateOne({userEmail:userEmail},{$set:{cart:userDetail.cart}});
                }
               
            }
            else{
                userDetail.cart.push({product_id:productID,quantity:1})
                await databaseProject.cart.updateOne({userEmail:userEmail},{$set:{cart:userDetail.cart}});
            }
        }
        else{
            await databaseProject.cart.insertOne({cart:[{product_id:productID,quantity:1}],userEmail:userEmail});
        }
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
export const validateFunc=(req,res)=>{
    return res.json("complete")
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
export const getOneCart=async (req,res)=>{
    console.log(req.userEmail);
    const itemList=await databaseProject.cart.aggregate([
        {
          '$match': {userEmail:req.userEmail}
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
export const deleteCart= async (req,res)=>{
    let deleteIndex=-1;
    const productId=req.params.id;
    const userEmail=req.userEmail;
    const cartDetail=await databaseProject.cart.findOne({userEmail:userEmail});
    cartDetail.cart.map((item,index)=>{
        if(item.product_id == productId){
            return deleteIndex=index
        }
    });
    
    if(deleteIndex>=0){
        if(Object.keys(cartDetail).length>0){
            
            const removed=cartDetail.cart.splice(deleteIndex,1);
    const updatedCart=cartDetail.cart;
    await databaseProject.cart.updateOne({userEmail:userEmail},{$set:{cart:updatedCart}})
    return res.json("complete")
        }
        return res.json("cart Error")
    }
    return res.json("error")
}
export const deleteAllCart=async(req,res)=>{
    const userEmail=req.userEmail;
    const deleted=await databaseProject.cart.deleteOne({userEmail:userEmail});
    if(deleted){
        return res.json("complete")
    }
    
   
}