const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded } = require("express");
const server = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.use(express.static('public'));

server.listen(process.env.PORT || 8888, () => "Foi!");

let carrinho = []

server.get("/", (req, res) => {
    
    return res.redirect("/produtos")

    });

server.get("/produtos", (req, res) => {
    
    const html1 = `
    <table style="border: 1px solid black">
    <tr style="border: 1px solid black">
    <td style="border: 1px solid black">
    <form method="post" action="/sucoDeMorango">
    <input name="idProduto" type="hidden"/>
    <button>Suco de morango</button>
    </form>
    <img style="max-width:150px;margin-left:-25px" src="https://atelieoficial.com.br/painel/upload/produto/suco_laranja_morango.png" alt="Suco de morango">
    </td>

    <td style="border: 1px solid black">
    <form method="post" action="/coxinha">
    <input name="idProduto" type="hidden"/>
    <button style="margin-top:0px">Coxinha</button>
    </form>
    <img style="max-width:150px;margin-left:auto" src="https://panattos.com.br/uploads/produtos/2017/03/coxinha-de-frango-com-requeijao-mini-congelada.jpg" alt="Coxinha">
    </td>

    <tr style="border: 1px solid black">
    <td style="border: 1px solid black">
    <form method="post" action="/enroladinho">
    <input name="idProduto" type="hidden"/>
    <button style="margin-top:0px">Enroladinho</button>
    </form>
    <img style="max-width:150px;margin-left:auto" src="https://marolacomcarambola.com.br/wp-content/uploads/2019/06/receita-de-enroladinho-de-salsicha-11.jpg" alt="Enroladinho">
    </td>

    <td style="border: 1px solid black">
    <form method="post" action="/sucoDeAbacaxi">
    <input name="idProduto" type="hidden"/>
    <button style="margin-top:0px">Suco de abacaxi</button>
    </form>
    <img style="max-width:150px;margin-left:auto" src="https://cidadeolimpica.com.br/wp-content/uploads/2022/10/receita-de-suco-de-abacaxi-696x464.jpg" alt="Suco de abacaxi">
    </td>
    `
    return res.send(html1)
})

server.post("/sucoDeMorango", urlencodedParser, (req, res) => {
    const produto = {
        id:1,
        valor: 1.50,
        qnt: 1,
        nome: "Suco de morango"
    }
    const html = `
    <img style="max-width:150px" src="https://atelieoficial.com.br/painel/upload/produto/suco_laranja_morango.png" alt="Suco de morango">

    <form method="post" action="/add/${produto.id}">
    <input type="hidden" value="${produto.id}"/>
    <button>Adicionar ao carrinho</button>
    `
    return res.send(html)
})

server.post("/coxinha", urlencodedParser, (req, res) => {
    const produto = {
        id:2,
        valor: 2.50,
        qnt: 1,
        nome: "coxinha"
    }
    const html = `
    <img style="max-width:150px;margin-left:auto" src="https://panattos.com.br/uploads/produtos/2017/03/coxinha-de-frango-com-requeijao-mini-congelada.jpg" alt="Coxinha">
    <form method="post" action="/add/${produto.id}">
    <input type="hidden" value="${produto.id}"/>
    <button>Adicionar ao carrinho</button>`


    return res.send(html)
})

server.post("/enroladinho", urlencodedParser, (req, res) => {
    const produto = {
        id:3,
        valor: 3.50,
        qnt: 1,
        nome: "enroladinho"
    }
    const html = `
    <img style="max-width:150px;margin-left:auto" src="https://marolacomcarambola.com.br/wp-content/uploads/2019/06/receita-de-enroladinho-de-salsicha-11.jpg" alt="Enroladinho">
    <form method="post" action="/add/${produto.id}">
    <input type="hidden" value="${produto.id}"/>
    <button>Adicionar ao carrinho</button>`

    return res.send(html)

})

server.post("/sucoDeAbacaxi", urlencodedParser, (req, res) => {
    const produto = {
        id:4,
        valor: 4.50,
        qnt: 1,
        nome: "Suco de abacaxi"
    }

    const html = `
    <img style="max-width:150px;margin-left:auto" src="https://cidadeolimpica.com.br/wp-content/uploads/2022/10/receita-de-suco-de-abacaxi-696x464.jpg" alt="Suco de abacaxi">
    <form method="post" action="/add/${produto.id}">
    <input type="hidden" value="${produto.id}"/>
    <button>Adicionar ao carrinho</button>
    
    `

    return res.send(html)

})

server.post("/add/:id", urlencodedParser, (req,res) => {
    const { id } = req.params;
    if(id == 1 ) {
        carrinho.push()
    }
})
