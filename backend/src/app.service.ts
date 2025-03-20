import { Injectable } from '@nestjs/common';
import { x } from 'core/src';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
