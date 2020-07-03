const { user } = require('./models');

module.exports = {
  signUp: (req, res) => {
    const { userName, signatureColor, email, password1, password2 } = req.body;
    user
      .findOrCreate({
        where: {
          userName: userName,
          email: email,
        },
        defaluts: {
          signaturecolor: signatureColor,
          password: password1,
        },
      })
      .spread((user, created) => {
        if (password1 !== password2) {
          res.status(400).send('Password Not equal');
          alert('비밀번호를 확인해주세요.');
        } else if (!created) {
          res.status(409).send('UserName or Email overlap');
          alert('닉네임, 이메일이 이미 존재합니다.');
        } else {
          res.status(200).send(user);
          alert('회원가입이 정상적으로 되었습니다.');
        }
      })
      .catch((err) => {
        if (err) {
          res.status(500).send('');
        }
      });
  },
};
