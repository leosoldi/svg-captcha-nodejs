# 📄 Sistema de CAPTCHA Personalizado

Este projeto implementa um sistema de CAPTCHA visual em SVG com Node.js, Ideal para proteger formulários contra envios automáticos.

---

## ⚙️ Tecnologias

- Backend: **Node.js + Express**
- Validação de imagem: **svg-captcha**

---

## 🔐 Fluxo

1. O cliente acessa a rota `/captcha` para gerar um CAPTCHA
2. O formulário HTML exibe o SVG + campo de entrada
3. Antes de enviar o formulário, o JS valida o CAPTCHA via `/form-submit`
4. Se for válido, processa o envio real (e-mail, etc), implemente em sua aplicação!

---

## 🔗 Endpoints da API

### `GET /captcha`

Gera um novo desafio visual:

```json
{
  "captchaId": "uuid",
  "captchaSvg": "<svg>...</svg>"
}

📁 Estrutura
backend-node/
  ├── controller/       ← Lógica de rotas
  ├── service/          ← Geração e verificação
  ├── utils/            ← Limite de requisições
  ├── router.ts         ← Rotas principais
  └── server.ts         ← Inicialização do servidor

✅ Backend (Node.js)
cd backend-node
npm install
npm run dev
