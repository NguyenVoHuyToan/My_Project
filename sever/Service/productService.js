import databaseProject from "../mongodb.js"

export const getAllProduct= async (req,res)=>{
    
    if(Object.keys(req.query).length>0){
        if(req.query.brands){
            const filterData=await databaseProject.inventory.find({brands:req.query.brands}).toArray();
            return res.json(filterData);
        }
        if(req.query.type){
            const filterData=await databaseProject.inventory.find({product_type:req.query.type}).toArray();
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

export const getOneProduct=(req,res)=>{
    
    
    return res.json()
}