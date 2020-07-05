const { User } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        if (!email) {
          res.status(404).send('Email is Null');
          //alert('이메일을 입력해주세요.');
        } else if (!password) {
          res.status(404).send('Password is Null');
          //alert('비밀번를 입력해주세요.');
        } else res.status(200).send(result);
        //alert(`${result.email}님 어서오세요 !`);
      })
      .catch((err) => {
        if (err) {
          res.status(500).send('');
        }
      });
  },
};
