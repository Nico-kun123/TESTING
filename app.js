"use strict"; // Строгий режим

//~~ EXPRESS. Создание сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
const express = require("express"); // Используем express для создания сервер
const port = 5500;                  // Номера порта
const app = express();              // Создаем объект приложения
  
app.use(express.json());
  
// Статические файлы, которые будут считываться (js, html, css) находятся в папке "public"
app.use(express.static(__dirname + '/public'));
  
// Загрузка файла "ParsedData.json" на сайт при нажатии на кнопку "Показать"
app.get('/ParsedData.json', function(req, res) {
    fs.readFile("public/json/ParsedData.json", urlencodedParser, function (err, file) {
        var data = JSON.parse(file);
        res.json(data);
    });
});

// Запускаем наше приложение на порту, равному значению переменной "port"
app.listen(port, () => {
    console.log(`\tСервер был запущен на порту: ${port}!\n`);
});