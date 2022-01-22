import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { GetCurrencyDto } from './dto/get-currency.dto';


@Injectable()
export class CurrencyService {
  constructor(
    private prisma: PrismaService,
  ) {}
  
  async create(createCurrencyDto: CreateCurrencyDto) {
    const { name, code, symbol } = createCurrencyDto
    return await this.prisma.currency.create({
      data: {
        name,
        code,
        symbol
      }
    });
  }

  async findAll(getCurrencyDto: GetCurrencyDto) {
    const {search} = getCurrencyDto
    return await this.prisma.currency.findMany({
      where: {
        name: {
          search
        },
        code: {
          search
        },
        symbol: {
          search
        }
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.currency.findUnique({
      where: {id}
    });
  }

  async update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
    const { name, code, symbol} = updateCurrencyDto
    return await this.prisma.currency.update({
      where: {
        id
      },
      data: {
        name,
        code,
        symbol
      }
    });;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} currency`;
  // }
}
