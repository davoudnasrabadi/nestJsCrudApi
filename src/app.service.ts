import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    let name = {
      name: 'ali'
    }
    return name;
  }
}
