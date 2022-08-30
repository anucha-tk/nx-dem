import { registerAs } from '@nestjs/config';

export default registerAs(
  'auth',
  (): Record<string, any> => ({
    jwt: {
      accessToken: {
        secretKey: process.env.NX_JWT_SECRET,
        expirationTime: process.env.NX_JWT_EXPIRE,
      },
      refreshToken: {
        secretKey: process.env.NX_JWT_REFRESH_SECRET,
        expirationTime: process.env.NX_JWT_REFRESH_EXPIRE,
      },
    },
  })
);
