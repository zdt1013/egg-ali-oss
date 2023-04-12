import OSS from 'ali-oss';

export { OSS };

declare module 'egg' {
  interface Application {
    aliOss: { get(id: string): OSS } & OSS;
  }

  interface Context {
    aliOss: Application['aliOss'];
  }
}
