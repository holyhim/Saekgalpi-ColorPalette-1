const { User } = require('../../models');

module.exports = {
  get: (req, res) => {
    User.findAll()
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(401).send('Need User');
          alert('유저가 존재하지 않습니다.');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  post: (req, res) => {
    const id = req.params.id;
    User.destroy({
      where: {
        id: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
        alert('유저를 삭제하였습니다.');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
