import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

const signup = async ({ name, email, password }) => {
  const existing = await authRepository.findUserByEmail(email);

  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await authRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });
};

const login = async ({ email, password }) => {
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
};

const getLoggedInUser = async (userId) => {

  const user = await authRepository.findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default {
  signup,
  login,
    getLoggedInUser
};
