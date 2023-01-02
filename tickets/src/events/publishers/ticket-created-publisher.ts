import { Publisher, Subjects, TicketCreatedEvent } from '@chmat/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
