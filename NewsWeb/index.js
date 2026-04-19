import express, { urlencoded } from "express";
import axios from "axios";
import dotenv from "dotenv";

// load the varibale form env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // read the environment variable name "PORT" -> take from the env  || else use 3000

// set up express config
app.set("view engine", "ejs"); //configure use ejs to render html file
app.use(express.static("public")); // use for static file from public/ folder
app.use(express.urlencoded({extended:true})); // read the data from HTML's form

// configure API
const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// ─────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────

// home page
app.get("/", (req,res) => {
  res.render("index", {
    activeNav: "home",
    pageTitle: "Home"
  });
});

// ROUTE 1: form submitted - news based on specific selection
app.post("/news", async (req,res) => {
  const {category, country, keyword } = req.body;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category: category, // topic: technology, sports, health...
        country: country, //country: us,gb,vn,...
        q: keyword || "", // search keyword (not required)
        pageSize: 12, // get a maximum of 12 posts
        apiKey: API_KEY
      },
    });
    // Filter articles with full imges and descriptions (avoid empty cards).
    const articles = response.data.articles.filter(
      (article) => article.urlToImage && article.description
    );

    // Render the result page, and pass data to EJS
    res.render("results",{
      articles: articles,
      category: category,
      country: country,
      keyword: keyword,
      totalResults: articles.length,
      activeNav: category, //Hightlight category in navbar
      pageTitle: category,
    });
  } catch (error) {
    console.error("NewsAPI error:",error.message);

    res.render("results", {
      articles: [],
      category: category,
      country: country,
      keyword: keyword,
      totalResults: 0,
      error: "Failed to load news.Please try again later.",
      activeNav: category,
      pageTitle: category,
    });
  }
});

// ROUTE 2: Clicks navbar - news based on category, GLOBAL (with no filter country)
app.get("/category/:name", async (req,res) => {
  const categoryName = req.params.name; // get the category name when take the url path => "technology", "politics",...

  try {
    // use /everything endpoint to take global news (no limits country)
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: categoryName, // search by the category's keyword
        language: "en", 
        sortBy: "publishedAt", // new post release
        pageSize:12,
        apiKey: API_KEY,
      },
    });


    const articles = response.data.articles.filter(
      (article) => article.urlToImage && article.description
    );

    res.render("results", {
      articles: articles,
      category: categoryName,
      country: "global", 
      keyword: "",
      totalResults: articles.length,
      activeNav: categoryName,
      pageTitle: categoryName,
    });
  } catch (error) {
    console.error("NewsAPI error:",error.message);
    res.render("results", {
      article: [],
      category: categoryName,
      country: "global",
      keyword: "",
      totalResults: 0,
      error: "Failed to load news.Please try again later.",
      activeNav: categoryName,
      pageTitle: categoryName,
    });
  }
});

// start the sever
app.listen(PORT, () => {
  console.log(`Sever is running on Port: ${PORT}`);
});