// Changed SignatureColor API

const { User } = require('../../models');

/***********
 *  유저의 시그니처 컬러를 변경하는 API
 *  1. 로그인 한 유저의 정보를 받아온다
 *  2. if (로그인 한 유저의 이메일 정보와 패스워드가 존재하면) {
 *   2-1. DB에서 찾는다 => 데이터를
 *   2-2. if (데이터가 존재하면) {
 *              i) 시그니처 컬러 컬럼의 밸류를 업데이트 한다
 *           }
 *  3. else {
 *      3-1. 에러 안내 (401)
 *    }
 * }
 * ***********/
module.exports = {
    post: (req, res) => {
        const { signatureColor } = req.body;
        const id = req.params.id;
        User.update(
            {
                signatureColor: signatureColor,
            },
            {
                where: {
                    id: id,
                },
            }
        )
            .then((data) => {
                console.log(data);
                if (data) {
                    res.status(200).send(data);
                    alert('signatureColor가 성공적으로 변경되었습니다.');
                } else {
                    res.status(401).send('need user');
                    alert('유저가 존재하지 않습니다.');
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send('Error');
                }
            });
    },
};
