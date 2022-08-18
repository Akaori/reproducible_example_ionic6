import { DataSource } from 'typeorm';
import sqliteConnection from '../database';
import { Form } from '../entity/form';
import { AddFormTable1653413416252 } from '../migration/1653413416252-AddFormTable';

export default new DataSource({
  name: 'exampleConnection',
  type: 'capacitor',
  driver: sqliteConnection,
  database: 'example',
  entities: [
    Form,
  ],
  migrations: [
    AddFormTable1653413416252,
  ],
  logging: ['error', 'query', 'schema'],
  synchronize: false,
  migrationsRun: false,
});
