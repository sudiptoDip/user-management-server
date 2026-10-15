import express from 'express'
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("user are comming soon")
})

const users = [
    {id: 1, name: "John Doe", email:"john.doe@example.com"},
    {id: 1, name: "John Doe", email:"john.doe@example.com"},
    {id: 1, name: "John Doe", email:"john.doe@example.com"},
    {id: 1, name: "John Doe", email:"john.doe@example.com"}
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.listen(PORT,()=>{
    console.log(`Server Are Running On Port ${PORT}`);
})