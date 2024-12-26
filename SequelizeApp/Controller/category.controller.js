import category from "../Model/category.model.js";
export const SaveInBulk = (request,response,next)=>{
    category.bulkCreate(request.body)
    .then((result)=>{
        return  response.status(200).json({message:" Category Created....."})
    }).catch((err)=>{
        console.log(err);
        return response.status(500).json({message:" Invalid Entry"})
    });
}
export const ViewCategory = (request,response,next)=>{
    category.findAll(request.body , {raw:true})
    .then((result)=>{
        return response.status(200).json({result})
    }).catch((err)=>{
        console.log(err);
        return response.status(500).json({message:"Invalid Entry"})
    });
}
export const deleteCategory =( request,response,next)=>{
    const id=request.params.id;
    category.destroy({where: {id}})
    .then((result)=>{
        return response.status(200).json({message:"Category removed....."})
    }).catch((err)=>{
      console.log(err);
    });
}