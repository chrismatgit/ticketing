import { OrderCreatedEvent, Publisher, Subjects } from '@chmat/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
