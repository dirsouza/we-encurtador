import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ShortenUrlDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    type: String,
    example: 'http://wisereducacao.com/',
  })
  url: string;
}
