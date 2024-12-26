import { validationResult } from "express-validator";
import product from "../Model/product.model.js";
export const SaveInBulk = (request,response,next)=>{
    product.bulkCreate(request.body.products)
    .then((result)=>{
        return response.status(200).json({message:" Product Added"})
    }).catch((err)=>{
        return response.status(500).json({message:" Invalid Entry"})
    })
}
export const viewProduct = (request,response,next)=>{
    product.findAll(request.body.products)
    .then((result)=>{
        return response.status(200).json({message:" Product.....",result});
    }).catch((err)=>{
        return response.status(500).json({message:"Invalid Entry"});
    });
}
export const deleteProduct = (request,response,next)=>{
    const id= request.params.id;
    product.destroy({where:{id}})
    .then((result)=>{
        return response.status(200).json({message:" Product removed..."});
    }).catch((err)=>{
        return response.status(500).json({message:"Invalid Entry"})
    });
}
export const editProduct = (request,response,next)=>{
    const id=request.params.id.product;
    product.update(request.body.products,{where:{id}})
    .then((result)=>{
        return response.status(200).json({result});
    }).catch((err)=>{
        console.log(err)
    });
}



