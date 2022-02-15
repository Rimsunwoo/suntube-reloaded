export const trending = (req, res) => res.render("home"); ///global
export const search = (req, res) => res.send("search video"); ///global
export const see = (req, res) => {
  return res.send(`Watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("edit video");
};
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
  console.log(req.param);
  return res.send("delete video");
};
