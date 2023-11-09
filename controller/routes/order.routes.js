import { Router } from "express";
import versionApi from "express-routes-versioning";
import { limitGrt } from "../../controller/helpers/limit.controller.js";
import { deleteOrderR,getOrdersR,getorderR,postCreateOrder,putUpdateOrder } from "../payproccess.controller.js";


export const ordenes = Router()
const version = versionApi();

ordenes.get('/',limitGrt(),getOrdersR)
ordenes.get('/order',limitGrt(),getorderR)
ordenes.post('/',limitGrt(),postCreateOrder)
ordenes.put('/',limitGrt(),putUpdateOrder)
ordenes.delete('/',limitGrt(),deleteOrderR)

