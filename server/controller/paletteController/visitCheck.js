const { Palette } = require('../../models');

module.exports = {
  get: (req, res) => {
    const id = req.params.id;
    Palette.findOne({
      where: {
        id: id,
      },
    })
      .then((result) => {
        if (result) {
          Palette.update(
            {
              visit: Palette.sequelize.literal('visit + 1'),
            },
            {
              where: {
                id: id,
              },
            }
          )
            .then((result) => {
              res.status(200).send(result);
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        } else if (!result) {
          res.status(404).send('Not Found');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
