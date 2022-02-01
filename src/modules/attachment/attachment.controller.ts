import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ConflictException } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiFiles } from 'src/decorators/api-file.decorator';
import { diskStorage } from 'multer';
import { editFileName } from './edit-file-name';
import { fileMimetypeFilter } from './file-mimetype-filter';

@ApiTags('Uploads')
@Controller('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) { }
  
  @Post('upload/images')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
      destination: './uploads',
      filename: editFileName,
    }),
    fileFilter: fileMimetypeFilter('image'),
  }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array', 
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @ApiOperation({ summary: 'AS A USER, I CAN UPLOAD ATTACHMENTS'})
  async createImage(@UploadedFiles() files) {
    console.log(files)
    if (!files || !files.length) throw new ConflictException(`Add files`);
    let request: CreateAttachmentDto[] = []
    files.forEach(file => {  
      const attachment: CreateAttachmentDto = {
        originalName: file.originalname,
        filename: file.filename
      }
      request.push(attachment)
    });

    let attachments = await this.attachmentService.createMany(request)
    return attachments

  }

  @Post('upload/attachments')
  @UseInterceptors(FileInterceptor('files', {
    storage: diskStorage({
        destination: './uploads',
        filename: editFileName
    }),
    fileFilter: fileMimetypeFilter('pdf')
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array', 
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @ApiOperation({ summary: 'AS A USER, I CAN UPLOAD ATTACHMENTS'})
  async createAttachments(@UploadedFiles() files) {
    console.log(files)
    if (!files || !files.length) throw new ConflictException(`Add files`);
    let request: CreateAttachmentDto[] = []
    files.forEach(file => {  
      const attachment: CreateAttachmentDto = {
        originalName: file.originalname,
        filename: file.filename
      }
      request.push(attachment)
    });

    let attachments = await this.attachmentService.createMany(request)
    return attachments
  }


}
