import { con } from "./conectdb.controller.js";
const db = await con();
const productos = db.collection("productos");

const allByCategory = async (category) =>  await productos.find({ categoria: category }).toArray();

const allByPriceMajor = async (priceGte) =>  await productos.find({ precio: { $gte: priceGte } }).toArray();

const allByPriceMinor = async (priceLte) =>  await productos.find({ precio: { $lte: priceLte } }).toArray();

const allByPriceRange = async (priceGte, priceLte) =>  await productos.find({ precio: { $gte: priceGte, $lte: priceLte } }).toArray();

const searchProduct = async (productName) => await productos.find({ name: productName}).toArray();

const createProduct = async (product) => await productos.insertOne(product)

const updateProduct = async (names,toChange) => await productos.updateOne({ name: names }, { $set: toChange })

const deleteProduct = async (names) => await productos.deleteOne({ name: names })

const getProduct = async (names) => await productos.find({name: names}).toArray()

const getProducts = async (names) => await productos.find().toArray();


