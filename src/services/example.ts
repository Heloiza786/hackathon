import axios from 'axios'; // Importando o axios para fazer requisições HTTP para a API

const token = 'YOUR_TOKEN'; // Definindo o token de acesso à API (devo pegar o token do localStorage)

localStorage.setItem('token', token); // Armazenando o token no localStorage do navegador








const myToken = localStorage.getItem('token'); // Pegando o token do localStorage
axios.get('http://localhost:9000/api/users', {
    headers: {
        'Authorization': `Bearer ${myToken}`
    }
})