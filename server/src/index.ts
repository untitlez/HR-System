import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import { routes } from "./routes";

const app = new Elysia()
  .use(
    cors({
      origin: process.env.DOMAIN,
      credentials: true,
    })
  )
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
    })
  )
  .use(routes);

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type ElysiaApp = typeof app;
