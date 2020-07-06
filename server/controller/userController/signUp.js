const { User } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { userName, signatureColor, email, password1, password2 } = req.body;
    User.findOne({
      where: {
        userName: userName,
        email: email,
      },
    })
      .then((result) => {
        if (result) {
          res.send('userName, email check').end();
          console.log('이메일, 닉네임 확인해주세요.');
        } else if (!result) {
          if (password1 !== password2) {
            res.send('Password not equle');
            console.log('패스워드 확인하세요.');
          } else if (password1 === password2) {
            User.create({
              userName: userName,
              signatureColor: signatureColor,
              email: email,
              password: password1,
            })
              .then((result) => {
                res.status(200).send(result);
                console.log('가입되었습니다.');
                //res.redirect('/user/signIn');
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
