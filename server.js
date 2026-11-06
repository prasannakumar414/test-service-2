import { createServer } from "node:http";
import { greet } from "./index.js";

const server = createServer((request, response) => {
  const url = new URL(request.url, "http://localhost");
  if (request.method === "GET" && url.pathname === "/greet") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: greet(url.searchParams.get("name") ?? "world") }));
    return;
  }
  response.writeHead(404);
  response.end();
});
server.listen(Number(process.env.PORT ?? 3002), "127.0.0.1");
