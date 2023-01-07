const express= require('express');
const app= express();
const port=7000;
const todoRoute=require('./routes/todoRoute');
const userRoute=require('./routes/userRoute')
const mongoose= require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log("connected to DB")
});

app.use(express.urlencoded({extended:true}));

app.use('/todo',todoRoute);
app.use('/user',userRoute);
app.get('/', (req, res) => res.send('Hello!'))
app.listen(port, () => console.log(`listening on port ${port}....`))