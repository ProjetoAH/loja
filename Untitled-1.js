<!DOCTYPE html>
<html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-widht,initial-scale=1.0">
    <title>loja online</title>
    |<style>
        * {
            margin:0;
            padding:0;
            box-sizing: border-box;
            font-family:Arial, sans-serif;
        }
        body {
            font-family:Arial, sans-serif;
            background-color: #f4f4f4;
            color:#333;
            
        }
        header {
            background-color: #333;
            color: white;
            padding: 10 px;
            text-align: center;
        }
       header nav ul {
            list-style-type: none;
        }
        header nav ul li {
          display: inline;
          margin: 0 15px;
        }
        header nav ul li a {
            color: white;
            text-decoration: none;
        }
        #produtos {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px;
        }
        .produto {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin:10px;
            background-color:white ;
            width: 200px;
            border-radius: 5px;
            text-align: center;
        }
        .produto img {
            width: 100%;
            border-radius: 5px;
        }
        #carrinho {
            padding: 20px;
            margin: 20px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        footer {
            background-color: #333;
            color: white;
            padding: 10px;
            margin-top: 20px;
            text-align: center;
        }
    </style>
    <link rel="stylesheet" href="style.css">
    </head>
<body>
<header>
    <h1>loja online</h1>
    <p>O seu delivery rápido e confiável</p>
    <nav>
        <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#carrinho">Carrinho</a></li>
        </ul>
    </nav>
</header>
<main>
    <section id="produtos">
        <h2>Nossos Produtos</h2>
        <div class="produto">
            <img src="https://m.media-amazon.com/images/I/51-LO2UvRyL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Produto 1">
            <h3>produto 1</h3>
            <p>Fone de Ouvido Bluetooth Sem Fio Wireless 5.1 Duplo Com Visor, Premium Melhor Compra Mix</p>
            <p>Preço: R$ 30,00</p>
            <button oncklink="Adicionarnocarrinho('produto 2', 30)"> adicionar no carrinho</button>
        </div>
        <div class="produto">
<img src="https://m.media-amazon.com/images/I/61iL94AqGCL._AC_SL1500_.jpg" alt="produto2">
        <h3>produto 2</h3>
        <p>Capa feminina de celular com corrente de amor inglesa para todas as capas para iPhone 13/12/11/X, 2 pacotes - rosa | para iPhone 11
            <p>Preço: R$ 50,00 </p>
            <button oncklink="Adicionarnocarrinho('produto 2', 30)"> adicionar no carrinho</button>
        </div>
        <div class="produto">
            <img src="https://images.tcdn.com.br/img/img_prod/1220136/carregador_de_parede_com_cabo_usb_tipo_c_x_iphone_1_5m_branco_comp_619_1_06737001431e663c31477a1175f031e3.jpg">
            <h3>produto 3</h3>
            <p>CARREGADOR DE PAREDE COM CABO USB TIPO C X IPHONE 1,5M BRANCO - COMP</p>
            <p>Preço: R$ 25,00</p>
            <button oncklink="Adicionarnocarrinho('produto 2', 30)"> adicionar no carrinho</button>
        </div>
    </section>
    <section id="carrinho">
        <img src="">
        <h2>Carrinho de compras</h2>
        |<div id="itens-carrinho">
            <p>0 carrinho está vázio</p>
        </div>
        <p id="total-carrinho">Total: R$ 0,00 </p>
        <button onclick="finalizarcompra()"> Finalizar Compra</button>
        </section>
</main>
<footer>
    <p>&copy; 2024 Loja Virtual-todos os direitos reservados.</p>
</footer>
<script src="script.js">
    let carrinho=[];
    let total= 0;
    function adicionarnocarrinho(nome, preço){
        carrinho.push({nome, preço});
        total+= preço;
        atualizarcarrinho();
    }
    function atualizarcarrinho() {
        const carrinhoDiv = 
        document.getElementById('itens-carrinho')
        const totalDiv = 
        document.getElementById('total-carrinho')
        
        carrinhoDiv.innerHTML = '';

        carrinho. forEASH((item, index) => {
            const itemDiv
        }
    }
    https://m.media-amazon.com/images/I/51-LO2UvRyL.__AC_SX300_SY300_QL70_ML2_.jpg
</script>
</body>
</html>
