import databaseProject from "../mongodb.js"

export const  addProduct= async (req,res)=>{
    await databaseProject.inventory.insertOne(req.body);
    return res.json("complete");
}