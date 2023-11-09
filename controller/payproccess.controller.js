import { con } from "./conectdb.controller.js";
const db = await con();
const productos = db.collection("productos");
const usuario = db.collection("usuario");
const orden = db.collection("orden");

const actToPay = async (cart, ID, total) => {
  try {
    const user = await usuario.find({ Id: ID }).toArray();
    let carrito = user[0].compras;
    var usernames = user[0].username;
    var dirrec = user[0].dirreccion;
    var email = user[0].email;
    carrito.push(cart);
    await usuario.updateOne(
      { username: usernames },
      { $set: { compras: carrito } }
    );
    cart.forEach(async (element) => {
      let product = await productos.find({ name: element }).toArray();
      let stocks = product[0].stock - 1;
      await productos.updateOne({ name: element }, { $set: { stock: stocks } });
    });
    const arr = await orden.find().toArray();
    let id = arr.length;
    await orden.insertOne({
      Id: id,
      Iusername: usernames,
      monto: total,
      dirreccion_de_entrega: dirrec,
      email: email,
      fecha_de_creacion: new Date(),
      estado: "En espera...",
    });
    return true;
  } catch (error) {
    console.log("Bad Ending...");
    return false;
  }
};

const updateOrder = async (ID, toChange) => await orden.updateOne({ Id: ID }, { $set: { estado: toChange } });

const createOrder = async (order) => await orden.insertOne(order);

const deleteOrder = async (ID) => await orden.deleteOne({ Id: ID });

const getOrder = async (ID) => await orden.find({ Id: ID }).toArray();

const getOrders = async () => await orden.find().toArray();

export async function putUpdateOrder(req, res) {
  const ID = req.query.id;
  const order = req.body;
  const rest = await updateOrder(ID, order);
  res.status(200).json({ status: 200, response: rest });
  return rest;
}

export async function postCreateOrder(req, res) {
  const order = req.body;
  const rest = await createOrder(order);
  res.status(200).json({ status: 200, response: rest });
  return rest;
}

export async function deleteOrderR(req, res) {
  const idDelete = req.body.id;
  const resp = await deleteOrder(idDelete);
  res.status(200).json({ status: 200, response: resp });
  return res;
}

export async function getorderR(req, res) {
  const ids = req.query.id;
  const resp = await getOrder(ids);
  res.status(200).json({ status: 200, response: resp });
  return resp;
}

export async function getOrdersR(req, res) {
  const resp = await getOrders();
  res.status(200).json({ status: 200, response: resp });
  return resp;
}

export async function payABuy(req, res) {
  let id = req.body.id;
  let carrito = req.body.cart;
  let totals = req.body.total;
  const resp = await actToPay(carrito, id, totals);
  res.status(200).json({ status: 200, response: resp });
  return resp;
}
