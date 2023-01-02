import { Subjects, Publisher, ExpirationCompleteEvent } from '@chmat/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
