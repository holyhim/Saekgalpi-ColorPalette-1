const { User } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    let session = req.session;
    User.findOne({
      where: {
        email: email,
        password: password,
      },
    })
      .then((data) => {
        if (!data) {
          res.status(401).send('Email or Password Not Found');
        } else {
          session.email = email;
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
