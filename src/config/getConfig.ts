if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT;
const TEXT = process.env.TEXT;

export default {
  PORT,
  TEXT,
};