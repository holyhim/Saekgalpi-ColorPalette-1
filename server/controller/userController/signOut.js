module.exports = {
    signOut: (req, res) => {
      req.destroy((err) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.status(200).redirect('/');
        }
      });
    },
  };
  