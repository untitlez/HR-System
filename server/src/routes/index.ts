import Elysia from "elysia";
import { create, list, listAll, remove, update } from "../controllers/users";
import { login, logout } from "../controllers/auth";
import { checkToken } from "../middleware/auth";

export const routes = new Elysia({ prefix: "/api" })
  .get("/users", listAll)
  .get("/users/:id", list)
  .post("/users", create)
  .put("/users/:id", update)
  .delete("/users/:id", remove)

  .get("/auth", checkToken)
  .post("/auth/login", login)
  .post("/auth/logout", logout);
