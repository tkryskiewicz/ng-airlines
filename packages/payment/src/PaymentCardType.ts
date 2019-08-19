export interface PaymentCardType {
  code: string;
  name: string;
  cardNumber: {
    length: number;
    pattern: string;
  };
  securityCode: {
    type: string;
    length: number;
  };
}
