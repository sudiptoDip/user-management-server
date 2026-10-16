import cors from 'cors'
import express from 'express'
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.post('/users', (req,res) =>{
    console.log("Data from client",req.body);
    res.send({success:true, message:"user added successfully"})
});

app.listen(PORT,()=>{
    console.log(`Server Are Running On Port ${PORT}`);
})