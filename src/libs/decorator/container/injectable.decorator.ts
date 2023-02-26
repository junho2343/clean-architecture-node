import "reflect-metadata";
import { ContainerConstant } from "@libs/constant/container.constant";

export const Injectable = (target: any) => {
  //  dependency injection 중 인스턴스를 여러번 생성하지 않도록 한번만 생성하여 저장해둠 - Singleton
  if (!Reflect.hasMetadata(ContainerConstant.provider, target)) {
    Reflect.defineMetadata(ContainerConstant.provider, new target(), target);
  }
};
