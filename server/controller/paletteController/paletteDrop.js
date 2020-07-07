const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const id = req.params.id;
    Palette.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
