import * as OssClient from 'ali-oss';

export { OssClient };

declare module 'egg' {
  interface Application {
    aliOss: { get(id: string): OssClient } & OssClient;
  }

  interface Context {
    aliOss: Application['aliOss'];
  }
}
