
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('salvarFornecedorBtn');



    form.addEventListener('click', function (event) {
        event.preventDefault();

        const razaoSocial = document.querySelector('input[name="razaoSocial"]').value;
        const cnpj = document.querySelector('input[name="cnpj"]').value;
        const nomeFantasia = document.querySelector('input[name="nomeFantasia"]').value;
        const inscricaoEstadual = document.querySelector('input[name="inscricaoEstadual"]').value;
        const inscricaoMunicipal = document.querySelector('input[name="inscricaoMunicipal"]').value;
        const cep = document.querySelector('input[name="cep"]').value;
        const endereco = document.querySelector('input[name="endereco"]').value;
        const numero = document.querySelector('input[name="numero"]').value;
        const complemento = document.querySelector('input[name="complemento"]').value;
        const bairro = document.querySelector('input[name="bairro"]').value;
        const municipio = document.querySelector('input[name="municipio"]').value;
        const estado = document.querySelector('input[name="estado"]').value;
        const pessoaContato = document.querySelector('input[name="pessoaContato"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const produtoUm = document.querySelector('input[name="produtoUm"]').value;
        const undMedidaUm = document.querySelector('input[name="undMedidaUm"]').value;
        const qdtdeEstoqueUm = document.querySelector('input[name="qdtdeEstoqueUm"]').value;
        const valorUnitarioUm = document.querySelector('input[name="valorUnitarioUm"]').value;
        const valorTotalUm = document.querySelector('input[name="valorTotalUm"]').value;
        const produtoDois = document.querySelector('input[name="produtoDois"]').value;
        const undMedidaDois = document.querySelector('input[name="undMedidaDois"]').value;
        const qdtdeEstoqueDois = document.querySelector('input[name="qdtdeEstoqueDois"]').value;
        const valorUnitarioDois = document.querySelector('input[name="valorUnitarioDois"]').value;
        const valorTotalDois = document.querySelector('input[name="valorTotalDois"]').value;


        const fornecedor = {
            razaoSocial: razaoSocial,
            cnpj: cnpj,
            nomeFantasia: nomeFantasia,
            inscricaoEstadual: inscricaoEstadual,
            inscricaoMunicipal: inscricaoMunicipal,
            cep: cep,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            municipio: municipio,
            estado: estado,
            pessoaContato: pessoaContato,
            telefone: telefone,
            email: email,
            produtoUm: produtoUm,
            undMedidaUm: undMedidaUm,
            qdtdeEstoqueUm: qdtdeEstoqueUm,
            valorUnitarioUm: valorUnitarioUm,
            valorTotalUm: valorTotalUm,
            produtoDois: produtoDois,
            undMedidaDois: undMedidaDois,
            qdtdeEstoqueDois: qdtdeEstoqueDois,
            valorUnitarioDois: valorUnitarioDois,
            valorTotalDois: valorTotalDois
        };


        console.log(fornecedor);
    });
});
