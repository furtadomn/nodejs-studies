import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/autores", AuthorController.listAuthors)
  .get("/autores/:id", AuthorController.getAuthor)
  .post("/autores", AuthorController.registerAuthor)
  .put("/autores/:id", AuthorController.updateAuthor)
  .delete("/autores/:id", AuthorController.deleteAuthor)

export default router;