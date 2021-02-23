import { Module } from '@nestjs/common';
import { EncurtadorController } from '@/api/v1/encurtador/encurtador.controller';

@Module({
  imports: [],
  controllers: [EncurtadorController],
  providers: [],
})
export class ApiModule {}
