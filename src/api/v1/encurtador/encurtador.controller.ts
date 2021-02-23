import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ShortenUrlDto, CreateShortenUrlDto, ExceptionDto } from '@/domain/dtos';

@ApiTags('Encurtador')
@Controller('encurtador')
export class EncurtadorController {
  @Get(':code')
  @ApiOperation({ summary: 'Find shortened url' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not found', type: ExceptionDto })
  @ApiInternalServerErrorResponse({ description: 'Internal server error', type: ExceptionDto })
  findByCode(@Param('code') code: string) {
    return code;
  }

  @Post()
  @ApiOperation({ summary: 'Create shortened url' })
  @ApiCreatedResponse({ description: 'Create', type: ShortenUrlDto })
  @ApiInternalServerErrorResponse({ description: 'Internal server error', type: ExceptionDto })
  create(@Body(ValidationPipe) createShortenedUrl: CreateShortenUrlDto) {
    return createShortenedUrl.url;
  }
}
