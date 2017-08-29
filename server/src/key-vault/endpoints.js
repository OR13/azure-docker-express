const kvservice = require("./kvservice");
const registerEndpoints = server => {
  server.post("/createkey/:keyname", (req, res, next) => {
    kvservice.createkey(req.params.keyname, (result) => {
      res.send(`key created successfully: ${result.key.kid}`);
    });
    next();
  });

  server.delete("/deletekey/:keyname", (req, res, next) => {
    kvservice.deletekey(req.params.keyname, (result) => {
      res.send("key deleted successfully");
    });
    next();
  });

  server.get("/getallkeys/:maxnumber", (req, res, next) => {
    kvservice.getallkeys(req.params.maxnumber, (result) => {
      res.send(result);
    });
    next();
  });

  server.post("/encrypt/", (req, res, next) => {
    kvservice.encrypt(req.body.keyId, req.body.data, (result) => {
      res.send(result);
    });
    next();
  });

  server.post("/decrypt/", (req, res, next) => {
    kvservice.decrypt(req.body.keyId, req.body.data, (result) => {
      res.send(result.result.toString("utf8"));
    });
    next();
  });

  server.post("/createsecret/:secretname/:secretvalue", (
    req,
    res,
    next
  ) => {
    kvservice.createSecret(
      req.params.secretname,
      req.params.secretvalue,
      (result) => {
        res.send(result.id);
      }
    );
    next();
  });

  server.get("/getsecret/:secretname/:secretversion", (req, res, next) => {
    kvservice.getSecret(
      req.params.secretname,
      req.params.secretversion,
      (result) => {
        res.send(result.value.toString());
      }
    );
    next();
  });

  server.delete("/deletesecret/:secretname", (req, res, next) => {
    kvservice.deleteSecret(req.params.secretname, (result) => {
      res.send("Secret deleted successfully");
    });
    next();
  });
};

module.exports = registerEndpoints;
