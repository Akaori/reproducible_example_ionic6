import { DataSource } from 'typeorm';
import sqliteConnection from '../database';
import { Form } from '../entity/form';
import { AddFormTable1653413416252 } from '../migration/1653413416252-AddFormTable';

export default new DataSource({
  name: 'opConnection',
  type: 'capacitor',
  driver: sqliteConnection,
  database: 'openpages-offline',
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
