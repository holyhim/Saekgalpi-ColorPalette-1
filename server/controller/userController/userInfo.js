/***********
 *  유저의 정보를 선택해서 가져오는 API
 *  1. 로그인 한 유저의 정보를 받아온다
 *  2. if (로그인 한 유저의 이메일 정보와 패스워드가 존재하면) {
 *   2-1. DB에서 찾는다 => 데이터를
 *   2-2. if (데이터가 존재하면) {
 *              유저의 정보를 보낸다. (200)
 *           }
 *  3. else {
 *      3-1. 에러 안내 (401)
 *    }
 * }
 * ***********/

module.exports = {
    userInfo: (req, res) => {
        const { email, password } = req.body;
        if (email && password) {
            user.findAll()
                .then((data) => {
                    if (data) {
                        res.status(200).send(data[0]);
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
        }
    },
};
