import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Order } from './entity/order.entity'; 
import { OrderService } from './app.service'; 
import { OrderController } from './app.controller'; 

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Order],
      synchronize: true, // Solo en desarrollo
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
