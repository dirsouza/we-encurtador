import { PickType } from '@nestjs/swagger';
import { ShortenUrlDto } from '@/domain/dtos/shorten-url.dto';

export class CreateShortenUrlDto extends PickType(ShortenUrlDto, ['url'] as const) {}
