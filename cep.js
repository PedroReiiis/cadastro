function consultarCEP() {
    const cep = document.getElementById('cep').value.replace('-', '');
    const resultado = document.getElementById('resultado');

    //limpas resultados anteriores
    document.getElementById('logradouro').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('localidade').textContent = '';
    document.getElementById('uf').textContent = '';
    resultado.style.display = 'none';

    if (cep.length !== 8) {
        alert('digite um cep valido.');
        return;
    }

    //requisição api via cep

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('cep não encontrado');
            } else {
                //exibir resultado
                document.getElementById('logradouro').textContent = data.logradouro;
                document.getElementById('bairro').textContent = data.bairro;
                document.getElementById('localidade').textContent = data.localidade;
                document.getElementById('uf').textContent = data.uf;
                resultado.style.display = 'block';
            }
        })
        .catch(error => {
            alert('Erro ao consultar CEP');
            console.error('Erro:', error)
        });
}
