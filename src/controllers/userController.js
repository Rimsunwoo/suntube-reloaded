export const join = (req, res) => res.send("Join"); ///global
export const login = (req, res) => res.send("login"); ///global

export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove User");
export const see = (req, res) => {
  res.send(`user id: ${req.params.id}`);
};
