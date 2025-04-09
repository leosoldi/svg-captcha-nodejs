import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`📥 [${req.method}] ${req.url}`);
    next();
  });
  

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor TypeScript rodando em http://localhost:${PORT}`);
});
