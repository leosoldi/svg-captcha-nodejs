import { Request, Response } from 'express';
import { validateCaptcha } from '../Service/captchaService';

export const submitForm = (req: Request, res: Response): void => {
    const { captchaId, captchaInput, ...formData } = req.body;
    console.log(captchaId, captchaInput)
    console.log('📨 Dados do formulário:', formData);
    const isValid = validateCaptcha(captchaId, captchaInput);
    console.log('isvalid', isValid)
    if (!isValid.success) {
      res.status(400).json({ success: false, message: isValid.message });
      return;
    }
  
    console.log('📨 Dados do formulário:', formData);
    res.json({ success: true, message: 'Formulário enviado com sucesso!' });
  };