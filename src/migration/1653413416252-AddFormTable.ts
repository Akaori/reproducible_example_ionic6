import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFormTable1653413416252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "form" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,  
                "name" varchar NOT NULL
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "form";
        `);
  }
}
