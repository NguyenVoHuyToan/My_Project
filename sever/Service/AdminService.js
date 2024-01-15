import databaseProject from "../mongodb.js"

export const  addProduct= async (req,res)=>{
    console.log(req.body);
    await databaseProject.inventory.insertOne(req.body);
    return res.json("complete");
}