import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as qrcode from 'qrcode';

@Controller('qr')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('qrcode')
  // async getQRCode(@Res() res): Promise<string> {
  //   try {
  //     const data = this.appService.getQRCode();
  //     return res.status(200).json(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

// import { Controller, Get, Res } from '@nestjs/common';

@Controller('qr')
export class QRController {
  @Get('qrcode')
  async generateQR(@Res() res: any) {
    const link = 'http://www.omdbapi.com/?s=great&apikey=1cb2ace2';
    const qr = await qrcode.toDataURL(link);
    res.status(200).json({ qr });
  }
}

// import { Controller, Get, Res } from '@nestjs/common';
