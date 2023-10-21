export const getAllUsers = async (req, res) => {
    const db = await con();
    const usuario = db.collection("users");
    const result = await usuario.find().toArray();
    res.send(result);
  };