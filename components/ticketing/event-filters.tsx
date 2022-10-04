import { useState } from 'react'
import { EventTypes, EventTypeElement } from '../../pages/api/tickets/event-types'

interface Values {
  country: string
  eventType: string
}

const eventTypesList = new EventTypes()

const EventFilters = () => {
  const [selectedEventTypes, setSelectedEventTypes] = useState<Array<string>>([])

  return <form className='tickets-filter-form'>
    <div className='flex flex-row'>

      <div className='basis-1/4'>
        <label htmlFor='country'>Country</label>
      </div>
      <div className='basis-3/4 grow'>
        <input id='country' name='country' placeholder='John' type='text' className='tickets input' />
      </div>

      <div className='basis-1/4'>
        <label htmlFor='eventType'>Event Type</label>
      </div>
      <div className='basis-3/4'>
        <select
          id='eventType'
          className='bg-slate-200 text-slate-800'
          multiple={true}
          name='eventType'
          value={selectedEventTypes}
        >
          {eventTypesList.getEventTypes().map((eventType: EventTypeElement) => {
            return <option className='bg-slate-200' key={eventType.code} value={eventType.code}>{eventType.description}</option>
          })
          }
        </select>

      </div>
    </div>
  </form>
}

export default EventFilters
