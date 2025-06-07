import express from "express";
import { urlModel } from "../model/shortUrl";
export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
 
  try {
      console.log(req,'requestpost')
    console.log("The fullurl is", req.body.fullUrl);
    const urlFound = await urlModel.find({ fullUrl:req.body.fullUrl });
    // console.log(urlFound,'spaaaaaa',urlFound.length > 0)
    if (urlFound.length > 0) {
      res.status(409);
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl:req.body.fullUrl });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrls = await urlModel.find().sort({createdAt:-1});
    if (shortUrls.length < 0) {
      res.status(404).send({ message: "shorturls not found" });
    } else {
      res.status(200).send(shortUrls);
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
    try{
        const shortUrl = await urlModel.findOne({shortUrl:req.params.id})
        if(!shortUrl){
          console.log(shortUrl,'shortUrl')
            res.status(404).send({message:'Full url not found!'})
        }else{
            shortUrl.clicks++,
            shortUrl.save(),
            res.redirect(`${shortUrl.fullUrl}`)
        }
    }
    catch(error){
        res.status(500).send({ message: "something went wrong" });
    }
    
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {

    try{
      console.log(req,'spaaaaa')
        const shortUrl = await urlModel.findByIdAndDelete({ _id:req.params.id})
        
        if(shortUrl){
            res.status(200).send({message:'Requested url successfully deleted!'})
        }
    }
    catch(error){
        res.status(500).send({ message: "something went wrong" });
    }
};
