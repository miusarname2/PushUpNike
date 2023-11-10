import { con } from "./conectdb.controller.js";
const db = await con();
const usuario = db.collection("usuario");

const createUser = async (user) => await usuario.insertOne(user);

const updateUser = async (names, toChange) =>  await usuario.updateOne({ name: names }, { $set: toChange });

const deleteUser = async (names) => await usuario.deleteOne({ name: names });

const getUsers = async () => await usuario.find().toArray();

const getUser = async (names) => await usuario.find({ name: names }).toArray();

const getUserInf = async (email) => await usuario.find({ email: email }).toArray();

export async function postCreateUser(req,res) {
    const user = req.body
    const rest = await createUser(user);
    res.status(200).json({status:200,response:rest});
    return rest
}

export async function putUpdatedUser(req, res) {
    const name = req.query.name;
    const user = req.body;
    const rest = await updateUser(name, user);
    res.status(200).json({status:200,response:rest});
    return rest
}

export async function deleteUsers(req,res) {
    const nameDelete = req.body.name
    const resp = await deleteUser(nameDelete)
    res.status(200).json({status:200,response:resp});
    return res
}

export async function getUserMethod(req, res) {
    const names = req.query.name
    console.log( names)
    const resp = await getUser(names)
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getUsersMethod(req,res){
    const resp = await getUsers()
    res.status(200).json({status:200,response:resp});
    return resp
}

export async function getUserInfMethod(req,res){
    const email = req.body.email
    const resp = await getUserInf(email)
    res.status(200).json({status:200,response:resp});
    return resp
}