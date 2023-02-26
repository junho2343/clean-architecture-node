import { OrderServicePort } from "@apps/port/in/order.service.port";
import { Injectable } from "@libs/decorator";

@Injectable
export default class OrderService implements OrderServicePort {
  create() {
    // new OrderRoot()
    console.log("OrderService - order 실행!");
  }
}
