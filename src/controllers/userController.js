import bcrypt from "bcrypt";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      age,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error al crear el usuario", details: err.message });
  }
};
