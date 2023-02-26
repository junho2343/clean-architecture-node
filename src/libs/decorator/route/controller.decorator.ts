import "reflect-metadata";
import { RouteConstant } from "@libs/constant";

export const Controller = (prefix: string) => {
  return (target: Object) => {
    // 컨트롤러 경로 설정
    Reflect.defineMetadata(RouteConstant.prefix, prefix, target);

    // Since routes are set by our methods this should almost never be true (except the controller has no methods)
    // if (! Reflect.hasMetadata('routes', target)) {
    //   Reflect.defineMetadata('routes', [], target);
    // }
  };
};
