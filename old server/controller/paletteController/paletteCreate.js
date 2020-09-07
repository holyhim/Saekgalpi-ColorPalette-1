const { Palette } = require('../../models');

module.exports = {
  post: (req, res) => {
    const {
      id,
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
    Palette.create({
      userId: id,
      paletteName,
      description,
      colorCode01,
      colorCode02,
      colorCode03,
      colorCode04,
      colorCode05,
      colorCode06,
      colorCode07,
      visit: '0',
    })
      .then((data) => {
        if (data) {
          res.status(200).send(data);
          console.log('팔레트가 생성되었습니다.');
        } else {
          res.status(404).send('팔레트 생성에 실패하였습니다.');
          console.log('404 Error');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
