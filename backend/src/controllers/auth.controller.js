import data from '../utils/data.js';

const Auth = (req, res) => {
  const { username } = req.body;

  if (username.trim() == '' || !username) {
    return res.status(401).json({
      success: false,
      message: 'Please provide username',
    });
  }

  const userExists = data.some((data) => data.user === username);
  if (!userExists) {
    return res.status(401).json({
      success: false,
      message: 'user not found',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Login Successful',
    data: username,
  });
};

export default Auth;
