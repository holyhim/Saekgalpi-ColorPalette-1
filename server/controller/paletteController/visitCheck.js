const { Palette } = require('../../models');

module.exports = {
  get: (req, res) => {
    const id = req.params.id;
    Palette.findOne({
      where: {
        id: id,
      },
    })
      .then((data) => {
        if (data) {
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
            .then((data) => {
              res.status(200).send(data);
            })
            .catch((err) => {
              res.status(401).send(err);
            });
        } else if (!data) {
          res.status(404).send('Not Found');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
