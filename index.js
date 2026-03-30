const express = require('express');
app=express();
const port= 3000;

app.use(express.json());

app.get('/',(req,res) => {
    res.send('ta funcionando esse cacete');
});

app.listen(port,() => {
   console.log('esse caceteesse cacete esta rodando na porta ' +  port);
});