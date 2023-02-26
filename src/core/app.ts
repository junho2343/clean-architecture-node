import "reflect-metadata";
import express, { Express } from "express";

import { RouteDefinition } from "@libs/interface";
import { RouteConstant } from "@libs/constant";

export default class App {
  #app: Express;
  // #container: Container;
  #port: number;

  constructor(port: number, controllers: any[]) {
    this.#app = express();
    this.#port = port;
    // this.#container = new Container();

    this.#setContainer();
    this.#route(controllers);
  }

  #setContainer() {
    // this.#container.bind<OrderPort>(TYPES.OrderPort).to(OrderService);
    // container.bind<Weapon>(TYPES.Weapon).to(Katana);
    // container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
  }

  #route(controllers: any[]) {
    controllers.forEach((controller) => {
      // var ninja = this.#container.get<Warrior>(TYPES.Warrior);

      const instance = new controller();

      const prefix = Reflect.getMetadata(RouteConstant.prefix, controller);
      const routes: RouteDefinition[] = Reflect.getMetadata(
        RouteConstant.routes,
        controller
      );

      routes?.forEach((route) => {
        this.#app[route.method](
          (prefix + route.path).replaceAll("//", "/"),
          (req, res) => {
            instance[route.methodName](req, res);

            res.send();
          }
        );
      });
    });
  }

  public listen() {
    this.#app.listen(this.#port, () => {
      console.log(`Example app listening on port ${this.#port}`);
    });
  }
}

const TYPES = {
  OrderPort: Symbol("OrderPort"),
};

export { TYPES };
