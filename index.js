const http = require('http');
let counterHomePage = 0;
let counterAboutPage = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    if (req.url === '/') {
        counterHomePage += 1;
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.end(`<h1>Главная страница</h1><p>Просмотров: ${counterHomePage}</p><a href="http://localhost:3000/about">Ссылка на страницу about</a>`);
    } else if (req.url === '/about') {
        counterAboutPage += 1;
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.end(`<h1>Страница about</h1><p>Просмотров: ${counterAboutPage}</p><a href="http://localhost:3000/">Ссылка на страницу Главная</a>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.end('<h1>Странице не найдена</h1>');
    }
});

const port = 3000;

server.listen(port, () => { console.log(`Сервер запущен на порту ${port}`); });