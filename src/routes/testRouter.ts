import { NextFunction, Request, Response } from "express";
import * as test from "./test";

export const hello = (req: Request, res: Response, next: NextFunction) => {
  let text = test.testHello()
  res.send(text);
};
export const testText = (req: Request, res: Response, next: NextFunction) => {
  res.send(req.params.text);
};

