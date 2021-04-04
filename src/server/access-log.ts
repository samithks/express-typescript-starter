import { Express } from 'express';
import morgan from 'morgan';
import path from 'path';
import { createStream } from 'rotating-file-stream';

export default function accessLog(app: Express) {
  // create a rotating write stream
  const accessLogStream = createStream('access.log', {
    size: '10M', // rotate every 10 MegaBytes written
    interval: '1d', // rotate daily,
    compress: 'gzip', // compress rotated files
    maxFiles: 10,
    path: path.join(__dirname, '../../logs'),
  });
  app.use(morgan('combined', {stream: accessLogStream}));
}
