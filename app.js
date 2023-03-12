"use strict"; // Строгий режим

//~~ EXPRESS. Настройка и создание сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require("express");
const path = require("path");
const mysql = require("mysql");

const port = process.env.PORT || 5500;
const app = express();

let db_name = "myDB";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: `${db_name}`,   // Комментировать эту строку время от времени
  multipleStatements: true, // Несколько команд в bd.query
});

db.connect((err) => {
  if (err) throw err;
  console.log("\tMySQL Подключен!");
});

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

// Шаблоны для рендеринга 'ejs'
app.set("view engine", "ejs");

const data_4_render = {
  title: [
    "ParSir – Сервис сбора данных",
    "ParSir – Service for data gathering",
  ],
  metaKeyWords:
    "HTML, CSS, JavaScript, Node.js, Express, Parser, Parsing, Web-scraping, " +
    "Web-scap, Web-scaper, import, export, service, data analysis, Commerce, e-commerce" +
    "",
  descr: [
    "ParSir – сервис автоматизированного сбора данных для систем электронной коммерции. " +
      "Данных сервис предназначен для сбора данных о товарах с сайтов таких " +
      "интернет-магазинов, как Леруа Мерлен, Ozon и Wildberries для их дальнейшего " +
      "анализа и/или экспорта в файл",
    "ParSir is an automated data collection service for e-commerce systems. " +
      "This service is designed to collect product data from the websites of such online " +
      "stores as Leroy Merlin, Ozon and Wildberries for further analysis and/or export to a file.",
  ],
  about_ru: [
    "ParSir – сервис сбора данных для систем электронной коммерции.",
    "ParSir осуществляет сбор данных (парсинг/веб-скрапинг) о товарах с сайтов интернет-магазинов для их дальнейшего " +
      "анализа (например, просмотреть динамику изменения цен). Также сервис предоставляет возможность " +
      "экспорта собранных данных в файл в формате CSV, PDF и XML.",
    "Сервис имеет следующие возможности:",
    [
      "Сбор данных с сайта интернет-магазина, выбранного пользователем;",
      "Экспорт собранных данных в файл (форматы файла: CSV, PDF и XML);",
      "Возможность смены языка сайта (английский и русский языки).",
    ],
    "Сервис собирает данные с интернет-магазинов:",
  ],
  about_en: [
    "ParSir is a data collection service for e-commerce systems.",
    "ParSir collects data about products from online store sites for their further " +
      "analysis (for example, to view the dynamics of price changes). The service also provides the opportunity to " +
      "export collected data to a CSV, PDF and XML file.",
    "The service has following features:",
    [
      "Ability to collect data from any one of 5 online stores (depending on the user's selection);",
      "Ability to export the collected data to a file (file formats: CSV, PDF and XML);",
      "Ability to change the website's language (English and Russian).",
    ],
    "The service collects data from the following online store:",
  ],

  website_logo: "/img/Logo/ParSir Logo.svg",
  ozon_logo: "/img/Logo/Ozon.svg",
  wildberries_logo: "/img/Logo/Wildberries.svg",
  leroy_merlin_logo: "/img/Logo/Leroy_Merlin.svg",
  dns_logo: "/img/Logo/DNS.svg",
  aliExpress_logo: "/img/Logo/Aliexpress.svg",

  vklogo: "/img/Logo/Vk.svg",
  telegramlogo: "/img/Logo/Telegram.svg",
  youtubelogo: "/img/Logo/Youtube.svg",
  githublogo: "/img/Logo/GitHub.svg",
};

//~~ EXPRESS. Обработка запросов ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Обработка Главной Страницы
app.get("/", (req, res) => {
  res.render(__dirname + "/views/pages/index", {
    data_4_render,
  });
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/pages/about", {
    data_4_render,
  });
});

app.get("/extra.js", (req, res) => {
  res.sendFile(__dirname + "/extra.js");
});

// app.get("/deleteDB", (req, res) => {
//   let sql = `DROP DATABASE ${db_name}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;

//     console.log(result);
//     res.send(`База Данных "${db_name}" была успешно УДАЛЕНА!`);
//   });
// });

//~~ EXPRESS. Запуск сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(port, () => {
  console.log(`\tСервер был запущен на localhost:${port}!\n`);

  // Создаём БД, если её нет
  let sql = `CREATE DATABASE IF NOT EXISTS ${db_name}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(result);
    console.log(`\tБаза Данных "${db_name}" Подключена!`);
  });
});

//~~ MYSQL. База Данных ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~ FOREST ADMIN. Панель администратора ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// require("dotenv").config();

// const { createAgent } = require("@forestadmin/agent");
// const { createSqlDataSource } = require("@forestadmin/datasource-sql");

// // Create your Forest Admin agent
// // This must be called BEFORE all other middleware on the app
// createAgent({
//   authSecret: process.env.FOREST_AUTH_SECRET,
//   envSecret: process.env.FOREST_ENV_SECRET,
//   isProduction: process.env.NODE_ENV === "production",
// })
//   // Create your SQL datasource
//   .addDataSource(createSqlDataSource(process.env.DATABASE_URL))
//   // Replace "myExpressApp" by your Express application
//   .mountOnExpress(app)
//   .start();
