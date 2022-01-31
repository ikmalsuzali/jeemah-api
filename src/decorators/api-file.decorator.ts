import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName } from 'src/attachment/edit-file-name';
import { fileMimetypeFilter } from 'src/attachment/file-mimetype-filter';

export function ApiFiles(
    fieldName: string = 'files',
    localOptions?: MulterOptions,
) {
    let multerOptions = {
        storage: diskStorage({
            destination: './uploads',
            filename: editFileName
        }),
        fileFilter: fieldName === 'images' ? fileMimetypeFilter('image') : fileMimetypeFilter('pdf')
    }

  return applyDecorators(
    UseInterceptors(FileInterceptor(fieldName, multerOptions)),
    ApiConsumes('multipart/form-data'),
    ApiBody({
        schema: {
            type: 'object',
            properties: {
                [fieldName]: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            }
        }
    }),
  );
}