const EVENT_TYPES_LIST = [
  { code: 'FEST', description: 'Festivals' },
  { code: 'LIVE', description: 'Live music' },
  { code: 'CLUB', description: 'Clubbing/Dance music' },
  { code: 'DATE', description: 'Dating event' },
  { code: 'THEATRE', description: 'Theatre/Dance' },
  { code: 'COMEDY', description: 'Comedy' },
  { code: 'EXHIB', description: 'Exhibitions and Attractions' },
  { code: 'KIDS', description: 'Kids/Family event' },
  { code: 'BARPUB', description: 'Bar/Pub event' },
  { code: 'LGB', description: 'Gay/Lesbian event' },
  { code: 'SPORT', description: 'Sporting event' },
  { code: 'ARTS', description: 'The Arts' },
]

export type EventTypeElement = {
  code: string,
  description: string,
}

export class EventTypes {
  public getEventTypes(): Array<EventTypeElement> {
    return EVENT_TYPES_LIST
  }
}
