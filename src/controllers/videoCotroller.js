let videos = [
  {
    title: "First video",
    rating: 4,
    views: 1,
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
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log("show video", id);
  return res.render("watch", { pageTitle: `watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
