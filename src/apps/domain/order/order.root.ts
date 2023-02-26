enum OrderState {
  // 결제 완료
  PayComplete = "PayComplete",

  // 환불 완료
  RefundComplete = "RefundComplete",

  // 배송 중
  ShippingProgress = "ShippingProgress",

  // 배송 중
  ShippingComplete = "ShippingProgress",
}

export class OrderRoot {
  #orderId?: number;
  #state: OrderState;
  #productId: number;

  constructor(productId: number) {
    this.#productId = productId;
    this.#state = OrderState.PayComplete;
  }
}
