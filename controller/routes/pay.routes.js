import { Router } from "express";
import versionApi from "express-routes-versioning";
import { limitGrt } from "../../controller/helpers/limit.controller.js";
import { payABuy } from "../payproccess.controller.js";

export const pay = Router();
const version = versionApi();

pay.post("/", limitGrt(), payABuy);
