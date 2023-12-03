import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Server side is running');
});

app.get('/api/v1/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title:"Hettie Massey",
            content:"president center bell period split bad skill shine brass depend never speech sick tired fog supper continued whispered problem with locate among husband leave"
        },
        {
            id: 3,
            title:"Flora Cannon", 
            content:"facing carefully farther captain farther climb"
        },
        {
            id: 3,
            title:"Ruth Rivera",
            content:"cloth appearance constantly failed quite discovery box south former broken union thick beat nest grandfather throughout mighty solve clearly claws supper headed excited iron"
        },
        {
            id: 1,
            title:"Christopher Schultz",
            content:"adult plural road single breakfast thus view use for does buffalo he slabs expression collect box shoulder liquid determine believed officer act pot route"
        },
        {
            id: 5,
            title:"Larry Morton",
            content:"flight fed fairly job invented own forth depend sand receive told discover clock lucky mice many bar dawn story pleasant powerful pen fuel contain"
        }
    ];
    res.json(jokes);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});