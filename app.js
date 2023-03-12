"use strict"; // Строгий режим

//~~ EXPRESS. Настройка и создание сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Импорт библиотек и фреймворков
require("dotenv").config();
const express = require("express");
const path = require("path");

// Выбор номера порта у сервера
const port = process.env.PORT || 5500;
const hostname = "127.0.0.1";

// Создаём сервер
const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });

// Статические файлы (js, html, css и др) находятся в папке "public"
app.use(express.static(__dirname + "/public"));
// Для парсинга JSON
app.use(express.json());

// Шаблоны для рендеринга 'ejs'
app.set("view engine", "ejs");

/** Объект с данными, которые будут загружены на сайт (index.html) в результате рендеринга:
 *      - siteTitle: Название страницы в браузере;
 *      - metaKeyWords: Ключевые слова (keywords) в метаданных сайта;
 *      - metaDescr: Описание сайта (description) в метаданных сайта;
 */
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

  website_Language: "English",

  // Pic_Desktop: "/img/Logo/About ParSir (PC).jpeg",
  // Pic_Laptop: "/img/About ParSir (Laptop).jpeg",
  // Pic_Desktop: "/img/About ParSir.jpeg",
};

//~~ EXPRESS. Обработка запросов ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req, res) => {
  res.render(__dirname + "/views/index", {
    data_4_render,
  });
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/about", {
    data_4_render,
  });
});

app.get("/extra.js", (req, res) => {
  res.sendFile(__dirname + "/extra.js");
});

//~~ EXPRESS. Запуск сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(port, hostname, () => {
  console.log(`\tСервер был запущен на localhost:${port}!\n`);
});
