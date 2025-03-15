function consultarCEP() {
    const cep = document.getElementById('cep').value.replace('-', '');
    const resultado = document.getElementById('resultado');
	const numr = document.getElementById('numr');

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
				numr.style.display = '';
            }
        })
        .catch(error => {
            alert('Erro ao consultar CEP');
            console.error('Erro:', error)
        });
}

// adicionar endereço 

function confirmarEndr(){
	const numero = document.getElementById('numero').value;
	if (numero.length === 0) {
        alert('digite um número valido.');
        return;
    }
	const resultado = document.getElementById('resultado');
	console.log(resultado);
	console.log(document.getElementById('logradouro').textContent);
	console.log(document.getElementById('bairro').textContent);
	console.log(document.getElementById('localidade').textContent);
	console.log(document.getElementById('uf').textContent);
	console.log(document.getElementById('numero').value);
	
	const cep = document.getElementById('cep').value.replace('-', '');
	const endr = 'Endereço: ' + document.getElementById('logradouro').textContent 
	+ ', Número: ' + document.getElementById('numero').value
	+ ', Bairro: ' + document.getElementById('bairro').textContent
	+ ', Cidade: ' + document.getElementById('localidade').textContent 
	+ ' - ' + document.getElementById('uf').textContent
	+ ' CEP:' + cep;
	
	console.log(endr);

    window.opener.document.getElementById('cep').value = endr;
	window.close();

}
