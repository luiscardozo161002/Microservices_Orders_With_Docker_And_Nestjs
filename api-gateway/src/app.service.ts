import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  constructor(private readonly httpService: HttpService) {}

  async getUsers() {
    const response = await firstValueFrom(
      this.httpService.get('http://user-service:3001/users'), // Asegúrate que el nombre sea correcto
    );
    return response.data;
  }

  async getProducts() {
    const response = await firstValueFrom(
      this.httpService.get('http://product-service:3002/products'), // Asegúrate que el nombre sea correcto
    );
    return response.data;
  }

  async getOrders() {
    const response = await firstValueFrom(
      this.httpService.get('http://order-service:3003/orders'), // Asegúrate que el nombre sea correcto
    );
    return response.data;
  }
}