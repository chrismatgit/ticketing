import { Publisher, Subjects, TicketUpdatedEvent } from '@chmat/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
