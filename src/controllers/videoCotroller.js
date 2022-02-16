export const trending = (req, res) => res.render("home"); ///global
export const search = (req, res) => res.send("search video"); ///global
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
  console.log(req.param);
  return res.send("delete video");
};
