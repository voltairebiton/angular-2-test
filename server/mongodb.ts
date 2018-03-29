// tslint:disable-next-line:no-var-requires
const express = require("mongodb");

express.connect("mongodb://localhost:27017/test", (err, db) => {
  if (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
  } else {
      this.db = db;
  }
});

