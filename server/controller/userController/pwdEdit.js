const { User } = require('../../models');
//const Eslintrc = require('../../.eslintrc');

module.exports = {
  post: (req, res) => {
    const { password1, password2, password3 } = req.body;
    var session = req.session;
    User
      .findOne({
        where: {
          email: session.email,
          password: password1,
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).send('Password Wrong');
          alert('기존 비밀번호를 확인해주세요.');
        } else {
          res.status(200).send('OK');
          user
            .update(
              {
                password: password2,
              },
              {
                where: {
                  email: session.email,
                },
              }
            )
            .then((result) => {
              if (password2 === password3) {
                res.stauts(200).send(result);
                alert('비밀번호가 변경되었습니다.');
              } else {
                res.status(400).send('Password Not equal');
                alert('변경할 비밀번호와 변경할 비밀번호 확인이 다릅니다.');
              }
            });
        }
      })
      .catch((err) => {
        if (err) {
          res.status(500).send('');
        }
      });
  },
};

// MyPage 에서 passwd 변경 버튼을 누름
// findOne 으로 로그인 되어 있는 유저 검색  --> ????
// changedPassword Page에서 기존 비밀번호 확인
// 변경할 비밀번호 입력(pwd1, pwd2)
// 기존 비밀번호가 맞고, 변경할 비밀번호(pwd1, pwd2)가 맞으면 ok
