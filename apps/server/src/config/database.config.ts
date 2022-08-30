import { registerAs } from '@nestjs/config';

export default registerAs(
  'database',
  (): Record<string, any> => ({
    host: process.env.NX_DB_HOST,
    name: process.env.NX_DB_NAME,
    user: process.env.NX_DB_USER,
    password: process.env.NX_DB_USER_PWD,
  })
);
