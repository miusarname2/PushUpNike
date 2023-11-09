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


export async function getAllByCategory(req, res){
    const category = req.params.category
    const resp = await allByCategory(category)
    res.status(200).json({status:200,response:resp});
    return resp
} 

export async function getAllByPriceMajor(req, res){
    const priceMajor = req.query.price
    const resp = await allByPriceMajor(priceMajor)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getAllByPriceMinor(req, res){
    const priceMinor = req.query.price
    const resp = await allByPriceMinor(priceMinor)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getAllByPriceRange(req, res){
    const priceGte = req.query.major
    const priceLte = req.query.minor
    const resp = await allByPriceRange(priceGte, priceLte)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function searchProductMethod(req, res){
    const productName = req.query.productName
    const resp = await searchProduct(productName)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function createProductMethod(req, res){
    const product = req.body
    const resp = await createProduct(product)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function updateProductMethod(req, res){
    const name = req.query.name
    const product = req.body
    const resp = await updateProduct(name, product)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function deleteProductMethod(req, res){
    const names = req.body.name
    const resp = await deleteProduct(names)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getProductMethod(req, res){
    const names = req.query.name
    const resp = await getProduct(names)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getProductsMethod(req, res){
    const resp = await getProducts()
    res.status(200).json({status:200,response:resp});
    return resp
}


