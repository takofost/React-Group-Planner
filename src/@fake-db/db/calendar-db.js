import mock from './../mock';
import {FuseUtils} from '@fuse';

const calendarDB = {
    events: [
        {
            id    : 0,
            title :'CHOP Zoo Event',
            allDay: true,
            start : new Date(2019, 5, 26),
            end   : new Date(2019, 5, 26)
        },
        {
            id    : 1,
            title : 'Project Presentation + Last Day of Class',
            allDay: true,
            start : new Date(2019, 5, 29),
            end   : new Date(2019, 5, 29)
        },
        {
            id    : 2,
            title : '4th of July',
            allDay: true,
            start : new Date(2019, 6, 4),
            end   : new Date(2019, 6, 4)
        }
    ]
};

mock.onGet('/api/calendar-app/events').reply((config) => {
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/add-event').reply((request) => {
    const data = JSON.parse(request.data);
    calendarDB.events = [
        ...calendarDB.events, {
            ...data.newEvent,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/update-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.map((event) => {
        if ( data.event.id === event.id )
        {
            return data.event
        }
        return event
    });

    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/remove-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.filter((event) => data.eventId !== event.id);

    return [200, calendarDB.events];
});
