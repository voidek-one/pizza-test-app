const QA_SERVER = "https://eu1.locationiq.com/";

const http = require("http");
const httpProxy = require("http-proxy");
const Express = require("express");

const app = new Express();
const server = new http.Server(app);

const proxy = httpProxy.createProxyServer({});

const enableCors = function(req, res, next) {
  if (req.headers["access-control-request-method"]) {
    res.setHeader(
      "access-control-allow-methods",
      req.headers["access-control-request-method"]
    );
  }

  if (req.headers["access-control-request-headers"]) {
    res.setHeader(
      "access-control-allow-headers",
      req.headers["access-control-request-headers"]
    );
  }

  if (req.headers.origin) {
    res.setHeader("access-control-allow-origin", req.headers.origin);
    res.setHeader("access-control-allow-credentials", "true");
  }

  next();
};

const sendError = (res, error) => console.error(res, error);

app.use((req, res, next) => {
  enableCors(req, res, next);
});

app.use(function(req, res, next) {
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return next();
  }

  proxy.web(
    req,
    res,
    {
      target: `${QA_SERVER}`,
      secure: true,
      changeOrigin: true
    },
    function(err) {
      sendError(res, err);
    }
  );
});

console.log("listening on port 5050");
server.listen(5050);
