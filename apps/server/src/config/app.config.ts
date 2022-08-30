import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.NX_APP_NAME || 'std-app',
    http: {
      port: Number.parseInt(process.env.NX_APP_PORT) || 3000,
    },
    globalPrefix: '/api',
  })
);
