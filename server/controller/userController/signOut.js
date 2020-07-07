module.exports = {
  post: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.status(200).redirect('/');
      }
    });
  },
};
