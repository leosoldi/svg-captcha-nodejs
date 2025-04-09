import rateLimit from 'express-rate-limit';

export const formLimiter = rateLimit({
 windowMs: 10 * 60 * 1000,
 max: 5,
 message: {
   status: 429,
   error: 'Muitas tentativas. Tente novamente em alguns minutos.',
 },
});
