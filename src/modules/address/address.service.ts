import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService){}

  create(createAddressDto: CreateAddressDto) {
    const { address, postcode, city_id, longitude, latitude, project_id} = createAddressDto
    return this.prisma.address.create({
      data: {
        address,
        postcode,
        longitude,
        latitude,
        city: {
          connect: {id: city_id}
        },
        project: {
          connect: { id: project_id },
        },
      }
    });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    const { address, postcode, city_id, longitude, latitude, project_id} = updateAddressDto
    return this.prisma.address.update({
      where: {
        id
      },
      data: {
        address,
        postcode,
        longitude,
        latitude,
        city: {
          connect: {id: city_id}
        },
        project: {
          connect: { id: project_id },
        },
      }
    });
  }


  remove(id: string) {
    return this.prisma.address.delete({
      where: {id}
    });
  }
}
