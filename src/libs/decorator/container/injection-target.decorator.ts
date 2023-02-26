import { ContainerConstant } from "@libs/constant/container.constant";
import { ContainerArgumentDefinition } from "@libs/interface";

export const InjectionTarget = <T extends { new (...args: any[]): {} }>(
  target: T
) => {
  return class extends target {
    constructor(...args: any[]) {
      // dependency injection..!!!
      const containerArguments: ContainerArgumentDefinition[] =
        Reflect.getMetadata(ContainerConstant.arguments, target);

      const constructorArguments = containerArguments.reduce(
        (sum: any[], current) => {
          sum[current.parameterIndex] = current.value;
          return sum;
        },
        []
      );

      super(...constructorArguments);
    }
  };
};
