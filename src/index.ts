import OrderController from "@apps/adapter/in/order.controller.adapter";
import App from "@core/app";

new App(3000, [OrderController]).listen();
