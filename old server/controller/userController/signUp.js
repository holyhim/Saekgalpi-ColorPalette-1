const { User } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { userName, email, password, checkPassword } = req.body;
    User.findOne({
      where: {
        userName: userName,
        email: email,
      },
    })
      .then((data) => {
        if (data) {
          res.status(401).send('이메일, 닉네임을 확인해주세요.');
        } else if (!data) {
          if (password !== checkPassword) {
            res.status(401).send('비밀번호와 비밀번호 재입력이 다릅니다.');
          } else if (password === checkPassword) {
            User.create({
              userName,
              signatureColor: '#2CCCE4',
              email,
              password,
            })
              .then((data) => {
                res.status(200).send(data);
              })
              .catch((err) => {
                res.status(500).send(err);
              });
          }
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
