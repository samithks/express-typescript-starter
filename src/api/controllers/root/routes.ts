import { Request, Response } from 'express';

export async function getRoot(req: Request, res: Response) {
  res.send({some: 'json'});
}
