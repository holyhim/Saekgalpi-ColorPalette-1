const { User } = require('../../models');
//const Eslintrc = require('../../.eslintrc');

module.exports = {
  post: (req, res) => {
    const id = req.params.id;
    const { password1, password2, password3 } = req.body;
    //var session = req.session;
    User.findOne({
      where: {
        id: id,
        password: password1,
      },
    })
      .then((result) => {
        if (result) {
          if (password2 === password3) {
            User.update(
              {
                password: password2,
              },
              {
                where: {
                  id: id,
                },
              }
            )
              .then((result) => {
                res.status(200).send(result);
              })
              .catch((err) => {
                if (err) {
                  res.status(404).send(err);
                }
              });
          } else if (password2 !== password3) {
            res.status(400).send('변경할 비밀번호를 확인해주세요.');
          }
        } else if (!result) {
          res.status(400).send('아이디, 패스워드를 확인해주세요.');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};

// MyPage 에서 passwd 변경 버튼을 누름
// findOne 으로 로그인 되어 있는 유저 검색  --> ????
// changedPassword Page에서 기존 비밀번호 확인
// 변경할 비밀번호 입력(pwd1, pwd2)
// 기존 비밀번호가 맞고, 변경할 비밀번호(pwd1, pwd2)가 맞으면 ok
// let id = req.params.id
