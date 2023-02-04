require('dotenv').config();
require('./db/mongoose');

// Routers
const userRouter = require('./routers/user');

// Express bootstrap
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

// Start server listen
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
