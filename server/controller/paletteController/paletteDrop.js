const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const id = req.params.id;
    Palette.destroy({
      where: {
        id: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
