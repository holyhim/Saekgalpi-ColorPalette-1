const { Palette } = require('../../models');

module.exports = {
    post: (req, res) => {
        const id = req.params.id;
        Palette.destroy({
            where: {
                id: id,
            },
        })
            .then((data) => {
                res.status(200).json(data);
                console.log('팔레트가 삭제 되었습니다.');
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log('500 Error');
            });
    },
};
