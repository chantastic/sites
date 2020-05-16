export default (req, res) => {
  const {
    query: { name },
  } = req;

  res.status(200).json({ name });
};
