import express from "express";
import pg from "pg";
import methodOverride from "method-override";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect DATABASE

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
db.connect();

// Middleware
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));


// map sort param
function getSortOrder(sort) {
  const map = {
    rating: "rating DESC, created_at DESC",
    date: "date_read DESC",
    title: "title ASC"
  }
  return map[sort] || map["rating"];
}
// Get 
app.get("/", async(req,res) =>{
  const sort = req.query.sort || "rating";
  try {
    const result = await db.query(`SELECT * FROM books ORDER BY ${getSortOrder(sort)}`);
    res.render("index",{
      books: result.rows,
      sort,
    });
  } catch(error) {
    console.error("GET / errorL:", error.message);
    res.status(500).send("ERROR when load the file.");
  }
});

// Post add new books
app.post("/books", async(req,res) => {
  const {title, author, isbn, rating, notes, date_read } = req.body;
  try{
    await db.query(
      `INSERT INTO books (title, author, isbn, rating, notes,date_read) VALUES ($1, $2, $3, $4, $5, $6)`,
      [title,author,isbn || null, Number(rating), notes, date_read]
    );
    res.redirect("/");
  } catch (error){
    console.error("POST /books: errrorL:", error.message);
    res.status(500).send("ERROR when add new books.");
  }
});

// GET - get the book's data to fill the modal edit
app.get("/books/:id/edit", async (req,res) => {
  try {
    const result = await db.query(
      "SELECT * FROM books WHERE id = $1", [req.params.id]
    );
    if(!result.rows.length) return res.status(404).json({error: "Not found"});
    res.json(result.rows[0]);
  } catch(error){
    console.error("GET /books/:id/edit error:", error.message);
    res.status(500).json({error: "Sever error"});
  }
});

// PUT - update the books
app.put("/books/:id", async (req,res) =>{
  const {title, author, isbn, rating, notes, date_read } = req.body;
  try {
    await db.query(
      `UPDATE books SET title=$1, author=$2, isbn=$3, rating=$4, notes=$5, date_read=$6
      WHERE id=$7`,[title, author, isbn||null, Number(rating), notes, date_read, req.params.id]
    );
    res.redirect("/");
  } catch(error){
    console.error("PUT /books/:id error:", error.message);
    res.status(500).send("Error when update the book list.");
  }
});

// DELETE - delete the books
app.delete("/books/:id", async (req,res) =>{
  try{
    await db.query("DELETE FROM books WHERE id=$1",[req.params.id]);
    res.redirect("/");
  } catch(error){
    console.error("DELETE /books/:id error:", error.message);
    res.status(500).send("Error when delete books.");
  }
});

// start sever
app.listen(PORT, () =>{
  console.log(`Sever is running on Port ${PORT}`)
})

