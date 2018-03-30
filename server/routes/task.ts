import { Request, Response, Router } from "express";
import * as uuid from "uuid";
import { con } from "../mongodb";

const taskRouter: Router = Router();

taskRouter.get("/", (request: Request, response: Response) => {
  con((dbo) => {
    dbo.collection("todo").find({}).toArray((err, result) => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line:no-console
      console.log(result);
      // const task = JSON.parse('1'); //result.task;
      response.json(result);
    // response.json(result.task);
    });
  });
});

taskRouter.post("/", (request: Request, response: Response) => {
  con((dbo) => {
    const obj = { _id: uuid.v4(), task: request.body.task };
    dbo.collection("todo").insertOne(obj, (err, result) => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line:no-console
      console.log(result);
      // const task = JSON.parse('1'); //result.task;
      // response.json(result);
      response.json(obj);
    // response.json(result.task);
    });
  });
});

taskRouter.delete("/:id", (request: Request, response: Response) => {
  con((dbo) => {
    const query = { _id: request.params.id };

    dbo.collection("todo").deleteOne(query, (err, result) => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line:no-console
      console.log(query);

      response.json({
        _id: request.params.id,
      });
    // response.json(result.task);
    });
  });
});

taskRouter.delete("/selected/:ids", (request: Request, response: Response) => {
  con((dbo) => {
    const ids = (request.params.ids).split(",");
    const query = { _id: {$in: ids }  };
    dbo.collection("todo").deleteMany(query, (err, obj) => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line:no-console
      console.log(obj.result.n);

      response.json({
        _id: ids,
      });
    // response.json(result.task);
    });
  });
});

export { taskRouter };
