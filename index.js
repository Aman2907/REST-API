import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express()
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

//route
app.get('/',(req,res) =>{
    console.log('[TEST]!')

    res.send('Hello from homepage.')

})
app.listen(PORT, () => {
    console.log(`example app listening on port ${PORT}`)
  })