import express from 'express';
import authRoutes from '../src/routes/auth.route.js';
import todoRoutes from '../src/routes/todo.routes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is runnig at port ${PORT}`);
});
