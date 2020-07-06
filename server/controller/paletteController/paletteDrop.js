const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { id } = req.params.id;
    Palette.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => {
        res.status(200).send(result);
        console.log('Sucsses');
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
