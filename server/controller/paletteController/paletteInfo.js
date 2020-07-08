const { Palette } = require('../../models');

module.exports = {
    get: (req, res) => {
        const id = req.params.id;

        //* user 당 팔레트 요청
        if (id) {
            Palette.findOne({
                where: {
                    userId: id,
                },
            })
                .then((data) => {
                    if (data) {
                        res.status(200).send(data);
                    } else {
                        res.status(404).send('Bad Request');
                        alert('잘못된 요청입니다');
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        }
        //* 전체 팔레트 요청
        else {
            Palette.findAll()
                .then((data) => {
                    if (data) {
                        res.status(200).send(data);
                    } else {
                        res.status(404).send('Bad Request');
                        alert('잘못 된 요청입니다');
                    }
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        }
    },
    updatedGet: (req, res) => {
        //* updatedAt으로 팔레트 요청

        Palette.findAll({
            order: [['updatedAt', 'DESC']],
            limit: 4,
        })
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send('Bad Request');
                    alert('잘못 된 요청입니다');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    visitGet: (req, res) => {
        //* visit으로 팔레트 요청

        Palette.findAll({
            order: [['visit', 'DESC']],
            limit: 16,
        })
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send('Bad Request');
                    alert('잘못 된 요청입니다');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
};
