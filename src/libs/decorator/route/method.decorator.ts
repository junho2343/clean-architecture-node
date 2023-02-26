import "reflect-metadata";
import { RouteDefinition, RouteMethod } from "@libs/interface";
import { RouteConstant } from "@libs/constant";

function routeBinder(method: RouteMethod) {
  return (path?: string) => {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      if (!Reflect.hasMetadata(RouteConstant.routes, target.constructor)) {
        Reflect.defineMetadata(RouteConstant.routes, [], target.constructor);
      }

      const routes: RouteDefinition[] = Reflect.getMetadata(
        RouteConstant.routes,
        target.constructor
      );

      routes.push({
        path: path || "",
        method: method,
        methodName: propertyKey,
      });

      Reflect.defineMetadata(RouteConstant.routes, routes, target.constructor);
    };
  };
}

export const Get = routeBinder(RouteMethod.get);
export const Post = routeBinder(RouteMethod.post);
