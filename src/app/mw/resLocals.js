import jwt from 'jsonwebtoken';
import 'dotenv/config';

function resLocals(req, res, next) {
  try {
    const {refreshToken} = req.cookies;
    const { user_jwt } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
    next();
  } catch (error) {
    next(error);
  }
}
