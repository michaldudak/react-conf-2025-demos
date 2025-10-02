import { Popover } from '@base-ui-components/react';
import styles from './calendar.module.css';
import { Frame } from './shared';
import { eventPopover, type EventData } from './calendar-shared';
import { Ellipsis, X } from 'lucide-react';

const events: EventData[] = [
  {
    title: 'React Conf 2025 talk',
    dayOfWeek: 2,
    startTime: 15.4167,
    endTime: 15.5833,
    dateString: 'October 7, 2025',
    location: 'The Westin Lake Las Vegas Resort & Spa, Main Stage',
    mapId: '/westin.png',
    id: 1,
  },
  {
    title: 'Booth time',
    dayOfWeek: 3,
    startTime: 9.5,
    endTime: 17,
    dateString: 'October 8, 2025',
    location: 'The Westin Lake Las Vegas Resort & Spa, MUI booth',
    mapId: '/westin.png',
    id: 2,
  },
  {
    title: 'Chilling out',
    dayOfWeek: 4,
    startTime: 9,
    endTime: 12,
    id: 3,
    dateString: 'October 9, 2025',
    description: 'Pool, spa, and more',
  },
];

export default function CalendarDemo() {
  return (
    <div className={styles.Page}>
      <div className={styles.Calendar}>
        <div className={styles.HourLabels}>
          {[...Array(24)].map((_, i) => (
            <div key={i} style={{ '--hour': i } as React.CSSProperties}>
              {i}:00
            </div>
          ))}
        </div>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
      <EventDetails />
    </div>
  );
}

function Event(props: { event: EventData }) {
  const { event } = props;

  return (
    <Popover.Trigger
      handle={eventPopover}
      className={styles.Event}
      payload={event}
      style={{
        top: `${(event.startTime - 6) * (100 / 24)}%`,
        height: `${(event.endTime - event.startTime) * (100 / 24)}%`,
        gridColumn: event.dayOfWeek,
      }}
      render={<div />}
      nativeButton={false}
    >
      <span className={styles.Title}>{event.title}</span>
      <span className={styles.Time}>
        {formatTime(event.startTime)} - {formatTime(event.endTime)}
      </span>
    </Popover.Trigger>
  );
}

function EventDetails() {
  return (
    <Popover.Root handle={eventPopover}>
      {({ payload }) => {
        if (!payload) {
          return null;
        }

        return (
          <Popover.Portal>
            <Popover.Positioner side="right" sideOffset={8} className={styles.Positioner}>
              <Popover.Popup className={styles.EventDetails}>
                <div className={styles.Header}>
                  <Popover.Title className={styles.EventTitle}>{payload.title}</Popover.Title>
                  <div className={styles.EventActions}>
                    <button>
                      <Ellipsis />
                    </button>
                    <Popover.Close>
                      <X />
                    </Popover.Close>
                  </div>
                </div>
                <p className={styles.EventTime}>
                  {payload.dateString} &middot; {formatTime(payload.startTime)} -{' '}
                  {formatTime(payload.endTime)}
                </p>

                {payload.description && (
                  <p className={styles.EventDescription}>{payload.description}</p>
                )}
                {payload.location && (
                  <p className={styles.EventLocation}>Location: {payload.location}</p>
                )}
                {payload.mapId && (
                  <div className={styles.EventMapWrapper}>
                    <img src={payload.mapId} alt={payload.location} className={styles.EventMap} />
                  </div>
                )}
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        );
      }}
    </Popover.Root>
  );
}

// Convert time as number (e.g. 13.5) to string (e.g. "13:30")
function formatTime(hour: number) {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  return `${h}:${m.toString().padStart(2, '0')}`;
}
