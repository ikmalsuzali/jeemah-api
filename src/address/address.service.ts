import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService){}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: createAddressDto
    })
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: {id},
      data: {
        ...updateAddressDto,
        city: {
          
        }
      }
    });
  }

  remove(id: string) {
    return this.prisma.address.delete({
      where: {id}
    });
  }
}
