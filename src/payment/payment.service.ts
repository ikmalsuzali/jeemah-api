import { GetPaymentDto } from './dto/get-payment.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentMethod, PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService){}


  create(createPaymentDto: CreatePaymentDto) {
    const { reference_no, user_id, payment_method, payment_status, project_id } = createPaymentDto
    const hasSameReferenceNo = this.prisma.payment.findFirst({
      where: { reference_no: reference_no}
    })
    if (hasSameReferenceNo) { return }
    return this.prisma.payment.create({
      data: {
        reference_no,
        user_id,
        payment_method,
        payment_status,
        project_id
      }
    });
  }

  findAll(getPaymentDto:GetPaymentDto) {
    const { project_id, user_id, search, payment_status, payment_method} = getPaymentDto
    return this.prisma.payment.findMany({
      where: {
        reference_no: {
          search: search || undefined
        },
        user_id: user_id || undefined,
        payment_method: payment_method || undefined,
        payment_status: payment_status || undefined,
        project_id
      }
    });
  }

  findOne(id: string) {
    return this.prisma.payment.findUnique({
      where: {id}
    });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: string) {
    return this.prisma.payment;
  }
}
