/***********
 * 팔레트의 정보를 가져오는 API
 * ***********/
const { Palette } = require('../../models');

module.exports = {
    get: (req, res) => {
        const { id } = req.params;

        //* user 당 팔레트 요청
        if (id) {
            Palette.findOne({
                where: {
                    userId,
                },
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
                    if (err) {
                        res.status(500).send('Errror');
                    }
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
                    if (err) {
                        res.status(500).send('Errror');
                    }
                });
        }
    },
    updatedGet: (req, res) => {
        //* updatedAt으로 팔레트 요청

        Palette.findOne({
            where: {
                updatedAt,
            },
            order: [['updated_at', 'DESC']],
           limit : 16
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
                if (err) {
                    res.status(500).send('Errror');
                }
            });
    },
};
