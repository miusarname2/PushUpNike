import { con } from "./conectdb.controller.js";
const db = await con();
const usuario = db.collection("usuario");

const createUser = async (user) => await usuario.insertOne(user);

const updateUser = async (names, toChange) =>  await usuario.updateOne({ name: names }, { $set: toChange });

const deleteUser = async (names) => await usuario.deleteOne({ name: names });

const getUsers = async () => await usuario.find().toArray();

const getUser = async (names) => await usuario.find({ name: names });
