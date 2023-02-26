import "reflect-metadata";
import { OrderServicePort } from "@apps/port/in/order.service.port";
import { Inject, Injectable, InjectionTarget } from "@libs/decorator";
import TestService from "@apps/application/test.service";

@Injectable
@InjectionTarget
class OrderService implements OrderServicePort {
  #testServicePort;
  constructor(@Inject(TestService) orderServicePort: OrderServicePort) {
    this.#testServicePort = orderServicePort;
  }

  order() {
    console.log("OrderService - order 실행!");
    console.log(this.#testServicePort);

    this.#testServicePort.order();
  }
}

export default OrderService;
