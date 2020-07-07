const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { id } = req.params.id;
    const {
      userId,
      paletteName,
      description,
      colorCode01,
      colorCode02,
      colorCode03,
      colorCode04,
      colorCode05,
      colorCode06,
      colorCode07,
    } = req.body;
    Palette.update(
      {
        paletteName: paletteName,
        description: description,
        colorCode01: colorCode01,
        colorCode02: colorCode02,
        colorCode03: colorCode03,
        colorCode04: colorCode04,
        colorCode05: colorCode05,
        colorCode06: colorCode06,
        colorCode07: colorCode07,
      },
      {
        where: {
          userId: userId,
        },
      }
    )
      .then((result) => {
        res.status(200).send(result);
        console.log('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
