import { OrderServicePort } from "@apps/port/in/order.service.port";
import { Injectable } from "@libs/decorator";

@Injectable
class TestService implements OrderServicePort {
  order() {
    console.log("TestService - order 실행!");
  }
}

export default TestService;
