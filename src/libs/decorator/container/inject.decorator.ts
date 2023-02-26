import { ContainerConstant } from "@libs/constant/container.constant";
import { ContainerArgumentDefinition } from "@libs/interface";

export const Inject = (provider: Object) => {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    // 이미 생성된 인스턴스 가져오기 - Singleton
    const containerProvider: ContainerArgumentDefinition[] =
      Reflect.getMetadata(ContainerConstant.provider, provider);

    // dependency injection을 위해 인스턴스 주입
    if (!Reflect.hasMetadata(ContainerConstant.arguments, target)) {
      Reflect.defineMetadata(ContainerConstant.arguments, [], target);
    }

    const containerArguments: ContainerArgumentDefinition[] =
      Reflect.getMetadata(ContainerConstant.arguments, target);

    containerArguments.push({
      value: containerProvider,
      parameterIndex,
    });

    Reflect.defineMetadata(
      ContainerConstant.arguments,
      containerArguments,
      target
    );
  };
};
