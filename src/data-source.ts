import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 12345,
  username: 'root',
  password: 'root',
  database: 'hanpoom',
  synchronize: false, // For development only. Remove in production.
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
});
