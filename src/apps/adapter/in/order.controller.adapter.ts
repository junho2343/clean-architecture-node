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
export default class OrderController {
  #orderServicePort;

  constructor(@Inject(OrderService) orderServicePort: OrderServicePort) {
    this.#orderServicePort = orderServicePort;
  }

  @Post()
  create() {
    this.#orderServicePort.create();
  }

  @Get("/test")
  test2() {
    console.log("test");
  }
}
