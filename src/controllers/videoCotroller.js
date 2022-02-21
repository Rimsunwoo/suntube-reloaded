const videos = [
  {
    title: "First video",
    rating: 4,
    views: 30,
    comments: 3,
    createdAt: "2 minutes ago",
    id: 1,
  },
  {
    title: "Second video",
    rating: 4,
    views: 30,
    comments: 3,
    createdAt: "2 minutes ago",
    id: 2,
  },
  {
    title: "Third video",
    rating: 4,
    views: 30,
    comments: 3,
    createdAt: "2 minutes ago",
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
}; ///global
export const see = (req, res) => {
  const { id } = req.params;
  console.log("show video", id);
  return res.render("watch", { pageTitle: "see" });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search video"); ///global
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => res.send("delete video");
