const app = require('./app');


const port = 3000;


app.get('/', (req, res) => {
     res.send("Hello World!!");
})

app.listen(port, ()=>{
     console.log('Server is running on Port http://localhost:${port}');  
});