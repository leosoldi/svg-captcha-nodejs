import { Request, Response } from 'express';
import { generateCaptcha } from '../Service/captchaService'

export const getCaptcha = (req: Request, res: Response) => {
  const { captchaId, captchaSvg } = generateCaptcha();
  res.json({ captchaId, captchaSvg });
};
