const { User } = require('../../models');

module.exports = {
    get: (req, res) => {
        User.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                    console.log('유저 목록을 조회하였습니다.');
                } else {
                    res.status(401).send('Need User');
                    console.log('404 Error');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
    post: (req, res) => {
        const id = req.params.id;
        console.log(id);
        User.destroy({
            where: {
                id: id,
            },
        })
            .then((data) => {
                res.status(200).json(data);
                console.log('유저를 삭제하였습니다.');
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
