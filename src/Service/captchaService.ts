import svgCaptcha from 'svg-captcha';
import { v4 as uuidv4 } from 'uuid';

const captchaStore = new Map<string, string>();

export const generateCaptcha = () => {
  const captcha = svgCaptcha.create({
    noise: 3,
    color: true,
    background: '#0000',
  });
  

  const captchaId = uuidv4();
  captchaStore.set(captchaId, captcha.text);

  setTimeout(() => captchaStore.delete(captchaId), 5 * 60 * 1000);

  return { captchaId, captchaSvg: captcha.data };
};

export const validateCaptcha = (captchaId: string, input: string) => {
  const real = captchaStore.get(captchaId);
  if (!real) return { success: false, message: 'Captcha expirado ou inválido' };

  if (input !== real) return { success: false, message: 'Captcha incorreto' };

  captchaStore.delete(captchaId);
  return { success: true };
};
