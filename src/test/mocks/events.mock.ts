import { CalendarEvent } from 'src/app/core/models/calendar.model';

const mockEvents: CalendarEvent[] = [
  {
    title: 'Belgian Air Force Days!',
    shortDescription: 'Skate ipsum dolor sit amet, pump layback axle set Tim May egg plant nose-bump durometer. Baseplate coper hard flip vert coffin yeah. 540 indy grab Mike York dude slap maxwell hang-up deck. Smith grind Bunson over the Junson salad grind transfer bearings sponsored half-flip. Noseblunt slide nose grab late yeah crail slide manual.',
    imageUrl: '../assets/demo/jet.jpg',
    startDatetime: new Date(),
  },
  {
    title: 'Security 101 Brussels',
    shortDescription: 'Mike York dude slap maxwell hang-up deck. Smith grind Bunson over the Junson salad grind transfer bearings sponsored half-flip. Noseblunt slide nose grab late yeah crail slide manual.',
    imageUrl: '../assets/demo/security.jpg',
    startDatetime: new Date(),
  },
  {
    title: 'New in Toronto',
    shortDescription: ' Noseblunt slide nose grab late yeah crail slide manual. ',
    imageUrl: '../assets/demo/toronto.jpg',
    startDatetime: new Date(),
  },
  {
    title: 'Fake event 1',
    shortDescription: 'Skate ipsum dolor sit amet, pump layback axle set Tim May egg plant nose-bump durometer. Baseplate coper hard flip vert coffin yeah. 540 indy grab Mike York dude slap maxwell hang-up deck. Smith grind Bunson over the Junson salad grind transfer bearings sponsored half-flip. Noseblunt slide nose grab late yeah crail slide manual.',
    imageUrl: null,
    startDatetime: new Date(2018, 7, 1),
  },
  {
    title: 'Fake event 2',
    shortDescription: 'Skate ipsum dolor sit amet, pump layback axle set Tim May egg plant nose-bump durometer. Baseplate coper hard flip vert coffin yeah. 540 indy grab Mike York dude slap maxwell hang-up deck. Smith grind Bunson over the Junson salad grind transfer bearings sponsored half-flip. Noseblunt slide nose grab late yeah crail slide manual.',
    imageUrl: null,
    startDatetime: new Date(2018, 7, 1),
  },
  {
    title: 'Fake event 3',
    shortDescription: 'Skate ipsum dolor sit amet, pump layback axle set Tim May egg plant nose-bump durometer. Baseplate coper hard flip vert coffin yeah. 540 indy grab Mike York dude slap maxwell hang-up deck. Smith grind Bunson over the Junson salad grind transfer bearings sponsored half-flip. Noseblunt slide nose grab late yeah crail slide manual.',
    imageUrl: null,
    startDatetime: new Date(2018, 7, 1),
  },
];

export default mockEvents;
