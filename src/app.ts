import express = require('express')
import * as testRouter from "./routes/testRouter";

const app = express();
app.get('/', testRouter.hello);
app.get('/test/:text', testRouter.testText);

export default app;