const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello I am Likhon')
});

const users = [
    { id: 0, name: 'Akter', email: 'akter@gmail.com' },
    { id: 1, name: 'Jethu', email: 'jethu@gmail.com' },
    { id: 2, name: 'Minar', email: 'minar@gmail.com' },
    { id: 3, name: 'Disturb', email: 'disturb@gmail.com' },
    { id: 4, name: 'Tanvin', email: 'tanvin@gmail.com' },
    { id: 5, name: 'Jahid', email: 'jahid@gmail.com' }
];

app.get('/users', (req, res) => {
    const search = req.query.search;

    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting', req.body);
    // res.send(JSOn.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port);
});