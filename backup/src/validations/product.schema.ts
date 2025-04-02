import Joi from 'joi';
import { Product } from '../types/product';

export const productSchema = Joi.object<Omit<Product, 'id'>>({
  name: Joi.string()
    .required()
    .min(3)
    .max(100)
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 3 characters',
      'string.max': 'Name must be less than 100 characters',
    }),
  price: Joi.number()
    .required()
    .min(0)
    .messages({
      'number.base': 'Price must be a number',
      'number.empty': 'Price is required',
      'number.min': 'Price cannot be negative',
    }),
  description: Joi.string()
    .required()
    .min(10)
    .max(500)
    .messages({
      'string.empty': 'Description is required',
      'string.min': 'Description must be at least 10 characters',
      'string.max': 'Description must be less than 500 characters',
    }),
});