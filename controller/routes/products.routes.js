import { Router } from "express";
import versionApi from "express-routes-versioning";
import { limitGrt } from "../../controller/helpers/limit.controller.js";
import {
  getAllByCategory,
  getAllByPriceMajor,
  getAllByPriceMinor,
  getAllByPriceRange,
  getProductMethod,
  getProductsMethod,
  searchProductMethod,
  createProductMethod,
  updateProductMethod,
  deleteProductMethod,
} from "../products.controller.js";

export const productos = Router();
const version = versionApi();

productos.get("/", limitGrt(), getProductsMethod);
productos.get("/byCategory/:category", limitGrt(), getAllByCategory);
productos.get("/byPriceMajor", limitGrt(), getAllByPriceMajor);
productos.get("/byPriceMinor", limitGrt(), getAllByPriceMinor);
productos.get("/byPriceRange", limitGrt(), getAllByPriceRange);
productos.post("/", limitGrt(), createProductMethod);
productos.put("/", limitGrt(), updateProductMethod);
productos.delete("/", limitGrt(), deleteProductMethod);
