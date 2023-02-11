import { Injectable } from '@nestjs/common';
import { Res } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getQRCode(@Res() res) {
    const link = 'http://www.omdbapi.com/?i=tt3896198&apikey=1cb2ace2';
    const qr = qrcode.toDataURL(link);
    res.status(200).json({ qr });
  }
}

// Path: qr-code-test/src/app.controller.ts
