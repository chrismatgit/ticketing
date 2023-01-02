import { Publisher, PaymentCreatedEvent, Subjects } from '@chmat/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
