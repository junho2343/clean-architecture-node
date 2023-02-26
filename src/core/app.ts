import express, { Express } from "express";

import { RouteDefinition } from "@libs/interface";
import { RouteConstant } from "@libs/constant";

export default class App {
  #app: Express;
  #port: number;

  constructor(port: number, controllers: any[]) {
    this.#app = express();
    this.#port = port;

    this.#route(controllers);
  }

  #route(controllers: any[]) {
    controllers.forEach((controller) => {
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
