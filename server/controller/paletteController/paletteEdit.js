const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const id = req.params.id;
    const {
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
          userId: id,
        },
      }
    )
      .then((data) => {
        res.status(200).send(data);
        console.log('파레트가 수정되었습니다.');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
