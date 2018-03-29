import { Request, Response, Router } from "express";

const taskRouter: Router = Router();

const task = ["unggoy", "ungas", "holy shit"];

taskRouter.get("/", (request: Request, response: Response) => {

  response.json(task);
});

export { taskRouter };
