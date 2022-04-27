import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};
export const postJoin = async (req, res) => {
  const { name, email, password, password2, username, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "password confirming does not match.",
    });
  }
  const usernameExist = await User.exists({ $or: [{ username }, { email }] });
  if (usernameExist) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username is already taken",
    });
  }
  try {
    await User.create({
      name,
      email,
      password,
      username,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.status(400).render("join", {
      pageTitle: "join",
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res
      .status(400)
      .render("login", { pageTitle, errorMessage: "Wrong password" });
  }
  return res.redirect("/");
};
export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove User");
export const see = (req, res) => {
  res.send(`user id: ${req.params.id}`);
};
