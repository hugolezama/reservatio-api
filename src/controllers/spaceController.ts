import { Request, Response, NextFunction } from 'express';
import log from '../config/logging';
import Space from '../models/space';
const Joi = require('joi');
const NAMESPACE = 'Space Controller';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const spaces = await Space.find();
    res.status(200).send(spaces);
  } catch (error) {
    log.error(NAMESPACE, error.message);
    res.status(500).send(error.message);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateSpace(req.body);

  if (error) {
    log.error(NAMESPACE, error);
    return res.status(400).send(error.details[0].message);
  }
  const space = new Space({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: parseInt(req.body.age),
  });

  try {
    const saved = await space.save();
    res.status(201).send(saved);
  } catch (error) {
    log.error(NAMESPACE, error);
    res.status(500).send(error.message);
  }
};

function validateSpace(space: any) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().integer().positive().min(18).required(),
  });

  return schema.validate(space);
}

export default { getAll, create };
