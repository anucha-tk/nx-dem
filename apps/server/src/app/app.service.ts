import { Injectable } from '@nestjs/common';
import { Post } from '@nx-demo/server/util-interfaces';

@Injectable()
export class AppService {
  getPosts(): Post[] {
    return [
      { title: 'a', body: 'body a' },
      { title: 'b', body: 'body b' },
    ];
  }
}
