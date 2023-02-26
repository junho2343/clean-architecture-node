export interface RouteDefinition {
  path: string;
  method: RouteMethod;
  methodName: string;
}

export enum RouteMethod {
  get = "get",
  post = "post",
  patch = "patch",
  del = "delete",
  put = "put",
}
