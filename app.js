
const express = require('express')
const app = express();
const PORT = 3005;

app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/artists'))

app.listen(PORT,()=>{
    console.log(`Running express on port ${PORT}...`);
})