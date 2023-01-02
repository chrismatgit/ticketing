import { OrderCancelledEvent, Publisher, Subjects } from '@chmat/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
