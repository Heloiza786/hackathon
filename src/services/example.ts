import axios from 'axios';

const token = 'YOUR_TOKEN';

localStorage.setItem('token', token);








const myToken = localStorage.getItem('token');
axios.get('http://localhost:9000/api/users', {
    headers: {
        'Authorization': `Bearer ${myToken}`
    }
})