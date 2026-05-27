import { createServer } from "node:http";
import { publicDir, homeHtmlDir, imagesDir } from "./paths.mjs";
import { join } from 'node:path'
import { createReadStream } from "node:fs";
createServer((req, res) => {
  // Décomposition de l'objet http.incomingMessage (Request)
  const { url, ip, host, method, headers } = req;
  console.log("url", url, "method", method);
  const headersResponse = { "content-type": "text/html; charset=utf-8" };
  if (method === "GET") {
    switch (req.url) {
      case "/":
        // res.writeHead(200, headersResponse);
        const homeFilename = join(homeHtmlDir, 'index.html')
        // Flux de lecture pour lire le fichier index.html
        const indexReadStream = createReadStream(homeFilename)
        // // Connecter les 2 flux (réponse du serveur qui est un flux d'écriture avec notre flux de lecture)
        indexReadStream.pipe(res)
        return
      case "/theme1":
        res.writeHead(200, headersResponse);
        break;
      default:
        res.writeHead(404, headersResponse);
        res.write("<h1>404</h1>");
        break;
    }
    res.end(); // ferme et renvoie la réponse au client
  } else {
    res.writeHead(403, headersResponse)
    res.end('Méthode non acceptée')
  }
}).listen(8081, () => console.log(`http://localhost:8081`));
