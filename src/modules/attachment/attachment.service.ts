import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'nestjs-prisma';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { GetAttachmentDto } from './dto/get-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import * as fs  from 'fs'


@Injectable()
export class AttachmentService {
  constructor(private prisma: PrismaService) { }
  
  async createMany(createAttachmentDto: Array<CreateAttachmentDto>) {
    const attachment = await this.prisma.attachment.createMany({
      data: createAttachmentDto
    })
    return await this.prisma.$transaction(
      createAttachmentDto.map((attachment) => this.prisma.attachment.create({
        data: {
          originalName: attachment.originalName,
          filename: attachment.filename
        }
      })
      )
    )
  }

  async findAll(getAttachmentDto: GetAttachmentDto) {
    return await this.prisma.attachment.findMany({
      where: getAttachmentDto
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} attachment`;
  // }

  // update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
  //   return `This action updates a #${id} attachment`;
  // }

  async remove(id: string, filename?: string) {
    await this.prisma.attachment.delete({
      where: {id}
    });

    fs.rm(`${process.cwd()}/uploads/${filename}`, err => {
      console.log(err)
    })
  
  }

  // @Cron('* 60 * * * *')
  async handleCron() {
    const getNullAttachmentDto = {
      post_attachment_id: null,
      post_image_id: null,
      project_logo_id: null,
      project_image_id: null,
      booking_image_id: null,
      booking_attachment_id: null
    }
    const unusedAttachments = await this.findAll(getNullAttachmentDto)
    unusedAttachments.forEach( attachment => {
      if (!attachment.id) return
      console.log(attachment)
       this.remove(attachment.id, attachment.filename)
    });
  }  
}
