import dbConnect from "../../../db/dbconnect";

import hero from "../../../models/Hero";

dbConnect();

// get all the records, post new records

export default async (req,res)=>{
    const {method}=req;

    switch(method){
        case "GET": 
        try {
            const Heros = await Hero.find({});
            res.status(200).json({success:true,hero:Heros})
        } catch (error) {
            res.status(400).json({success:false})
        }
        break;
        case "POST": 
        try {
            const Hero = await Hero.create(req.body);
            res.status(200).json({success:true,hero:Hero})
        } catch (error){
            res.status(400).json({success:false})
        }
        break;

        default:
            res.status(400).json({success:false})
            break;

    }
    
}
