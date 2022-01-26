import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as path from 'path';
import { diskStorage } from 'multer';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':imgpath')
seeUploadedFile(@Param('imgpath') image, @Res() res) {
  return res.sendFile(image, { root: './ProfileImages' });
}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './ProfileImages',
      filename: (req, file, callBack) => {
        const filename = path.parse(file.originalname).name + Date.now().toString();
        const extension = path.parse(file.originalname).ext;
        callBack(null, `${filename}${extension}`);
      }
    })
  }))
  uploadFile(@Res() res, @Req() req, @UploadedFile() file, @Body() body) {
    var filename = req.file.filename;
    console.log(filename);
    return res.status(HttpStatus.OK).json({
      success: true,
      data: file.path,
      name: file.originalname,
      Body: body.name,
      body: body.rollno
    });
  }
}
