const { user } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    user
      .findOne({
        where: {
          email: email,
          password: password,
        },
      })
      .then((result) => {
        if (!result.body.email) {
          res.status(404).send('Email Not found');
          alert('이메일을 확인해주세요.');
        } else if (!result.body.password) {
          res.status(404).send('Password Wrong');
          alert('비밀번호를 확인해주세요.');
        } else res.status(200).send('Signin Sucsses');
        alert(`${req.body.email}님 어서오세요 !`);
      })
      .catch((err) => {
        if (err) {
          res.status(500).send('');
        }
      });
  },
};
