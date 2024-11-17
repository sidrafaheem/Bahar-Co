import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import MainImage from './MainImage'
import Grid from './Grid'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,MainImage,Grid],
}
