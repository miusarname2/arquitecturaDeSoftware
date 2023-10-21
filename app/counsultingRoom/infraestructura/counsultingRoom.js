import { con } from "../../../helpers/connection/atlas.js";

const db = await con();
const doctors = db.collection("doctors");

export const Alldoctors = async () => await doctors.find().toArray();
