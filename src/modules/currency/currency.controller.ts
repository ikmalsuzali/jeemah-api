import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { GetCurrencyDto } from './dto/get-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@ApiTags('Currency')
@Controller('admin/currencies')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  @ApiOperation({ summary: 'AS A USER, I CAN CREATE CURRENCY' })
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currencyService.create(createCurrencyDto);
  }

  @Get()
  @ApiOperation({ summary: 'AS A USER, I CAN FIND ALL CURRENCY' })
  findAll(getCurrencyDto: GetCurrencyDto) {
    return this.currencyService.findAll(getCurrencyDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'AS A USER, I CAN FIND ONE CURRENCY' })
  findOne(@Param('id') id: string) {
    return this.currencyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'AS A USER, I CAN UPDATE CURRENCY' })
  update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
    return this.currencyService.update(id, updateCurrencyDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.currencyService.remove(+id);
  // }
}
