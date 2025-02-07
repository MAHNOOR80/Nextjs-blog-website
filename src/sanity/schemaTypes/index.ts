import { type SchemaTypeDefinition } from 'sanity'
import { Category} from './category'
import { blog } from './Products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,blog],
}
