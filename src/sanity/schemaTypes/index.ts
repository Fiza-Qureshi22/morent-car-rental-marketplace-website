import { type SchemaTypeDefinition } from 'sanity';
// import carData from '../data/carData'; // Ensure this path is correct or the file exists
import car from './car';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car],
}
