import dbConnect from "../../../db/dbconnect";

import Hero from "../../../models/Hero";

dbConnect();

export default async(req,res)=>{
    const {query:{id},method} = req;

    switch(method){
        case 'GET':
            try {
                const hero = await Hero.findbyId(id);
                if(!hero){
                    res.status(400).json({success:false})
                }
                res.status(200).json({success:true,hero:hero})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;
            case 'PUT':
            try {
                const hero = await Hero.findByIdAndUpdate(id,req.body,{
                    new :true,
                    runValidators:true,
                });
                if(!hero){
                    res.status(400).json({success:false})
                }
                res.status(200).json({success:true,hero:hero})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;
            case 'DELETE':
            try {
                const hero = await Hero.deleteOne({_id:id});
                if(!hero){
                    res.status(400).json({success:false})
                }
                res.status(200).json({success:true,hero:hero})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;

            default:
                res.status(400).json({success:false});
                break;

    }


}