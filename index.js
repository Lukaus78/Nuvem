const express = require("express");
const app = express();

app.listen(6900,function(erro){
    if (erro){
        console.log("ih,serjão,sujô");
    }else console.log("Aê Cassinão");
});

app.get("/", function (req, res) { 
    res.send("Suco de morango por 8 reais");
    });

app.get("/victor", function (req, res) { 
    res.send("caffè latte por 10 reais"); 
    });

app.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " algo criado!</h1>");
    }else{
        res.send("produto criado!");
    }
});