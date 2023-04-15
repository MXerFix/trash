import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  )
});

app.listen(3300, () => {
  console.log('server started on http://localhost:3300')
})