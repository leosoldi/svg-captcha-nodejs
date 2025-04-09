import express from 'express';
import { getCaptcha } from '../Controller/captchaController'
import { submitForm } from '../Controller/formController';
import { formLimiter } from '../utils/rateLimiter'

const router = express.Router();

router.get('/captcha', getCaptcha);
router.post('/form-submit', formLimiter, submitForm);

export default router;
