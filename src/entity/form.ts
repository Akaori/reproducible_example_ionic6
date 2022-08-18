import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('form')
export class Form {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;
}
