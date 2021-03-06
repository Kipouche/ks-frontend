let sha256 = require('sha256');
let User = require('../../../lib/user');
module.exports = async (req, res) => {
  const { id, token } = req.query;
  if (!id || !token) {
    return res.status(401).json({ message: 'A parameter is missing' });
  }
  if (sha256(id + process.env.SECRET_SHA) === token) {
    try {
      await User.validate(id);
      res.writeHead(302, {
        Location: '/login'
      });
      return res.end();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } else {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
