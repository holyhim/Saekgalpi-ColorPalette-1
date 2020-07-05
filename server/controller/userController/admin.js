/***********
 *  get : 유저 정보를 전부 가져오는 API
 *  1. 모든 유저의 정보를 받아온다
 *  2. 데이터에 넣어서 클라이언트로 보내준다
 *  팔레트는 컬러인포에서 실행합니다 그걸 가져와야 함! admin에!
 *
 *  post : 유저를 삭제할 수 있는 API
 *  팔레트는 컬러드랍에서 실행됩니다 그걸 가져가야함 admin에!
 * ***********/
const { User } = require('../../models');

module.exports = {
    get: (req, res) => {
        User.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(401).send('need user');
                    alert('유저가 존재하지 않습니다.');
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send();
                }
            });
    },
    post: (req, res) => {
        const { id, email, password, userName, signatureColor } = req.params;
        User.destroy({
            where: {
                id: id,
                email: email,
                password: password,
                userName: userName,
                signatureColor: signatureColor,
            },
        })
            .then((data) => {
                if (data === undefined) {
                    res.status(200).send('Delete User');
                    alert('유저를 삭제하였습니다.');
                } else {
                    res.status(400).send('Delete Not Working');
                    alert('Error!');
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send();
                }
            });
    },
};
