import {
  Controller,
  Get,
  Inject,
  InjectionTarget,
  Post,
} from "@libs/decorator";
import { OrderServicePort } from "@apps/port/in/order.service.port";
import OrderService from "@apps/application/order.service";

@InjectionTarget
@Controller("/order")
class OrderController {
  #orderServicePort;

  constructor(@Inject(OrderService) orderServicePort: OrderServicePort) {
    this.#orderServicePort = orderServicePort;
  }

  @Post()
  order() {
    this.#orderServicePort.order();
    // console.log();
    // this.#orderPort.order();
  }

  @Get("/test")
  test2() {
    console.log("test");
  }
}

export default OrderController;
