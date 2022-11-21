// const { Prisma } = require('@prisma/client')

const meetings = [
  {
    "order": 4.3,
    "day": "Wednesday",
    "time": "5:30 PM",
    "group": "Alanon",
    "type": "Zoom",
    "host": "Janelle K & Juliet M"
  },
  {
    "order": 3.3,
    "day": "Tuesday",
    "time": "12:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Scotty E"
  },
  {
    "order": 6.4,
    "day": "Friday",
    "time": "7:00 PM",
    "group": "AA Open - Except 3rd Friday",
    "type": "Zoom",
    "host": "Will C"
  },
  {
    "order": 2.1,
    "day": "Monday",
    "time": "8:00 AM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Sarah F & Mike P"
  },
  {
    "order": 5.1,
    "day": "Thursday",
    "time": "8:00 AM",
    "group": "AA Men",
    "type": "Zoom",
    "host": "Chris G"
  },
  {
    "order": 2.4,
    "day": "Monday",
    "time": "8:00 PM",
    "group": "NA Open",
    "type": "Hybrid",
    "host": "Chad"
  },
  {
    "order": 4.2,
    "day": "Wednesday",
    "time": "12:00 PM",
    "group": "AA 12&12",
    "type": "Zoom",
    "host": "Betty S"
  },
  {
    "order": 3.2,
    "day": "Tuesday",
    "time": "8:00 AM",
    "group": "AA Men",
    "type": "Zoom",
    "host": "Gerry M"
  },
  {
    "order": 4.1,
    "day": "Wednesday",
    "time": "8:00 AM",
    "group": "AA Men",
    "type": "Hybrid",
    "host": "Chris B"
  },
  {
    "order": 5.2,
    "day": "Thursday",
    "time": "12:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Melanie M"
  },
  {
    "order": 7.1,
    "day": "Saturday",
    "time": "8:00 AM",
    "group": "AA Men",
    "type": "Hybrid",
    "host": "Scott K & Jim H"
  },
  {
    "order": 5.5,
    "day": "Thursday",
    "time": "8:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Randy B"
  },
  {
    "order": 3.1,
    "day": "Tuesday",
    "time": "8:00 AM",
    "group": "AA Coed",
    "type": "In Person",
    "host": "Dave M & Caitlyn M"
  },
  {
    "order": 7.4,
    "day": "Saturday",
    "time": "8:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Scott K"
  },
  {
    "order": 5.4,
    "day": "Thursday",
    "time": "6:30 PM",
    "group": "OA",
    "type": "Hybrid",
    "host": "Barb G-C & Kim G"
  },
  {
    "order": 1.2,
    "day": "Sunday",
    "time": "7:00 PM",
    "group": "AA Secular",
    "type": "Zoom",
    "host": "Scott K"
  },
  {
    "order": 2.2,
    "day": "Monday",
    "time": "12:00 PM",
    "group": "AA Open",
    "type": "Hybrid",
    "host": "Helen P & Catherine C"
  },
  {
    "order": 2.3,
    "day": "Monday",
    "time": "6:30 PM",
    "group": "AA Women",
    "type": "Zoom",
    "host": "Jill H & Deb A & Sue B"
  },
  {
    "order": 6.5,
    "day": "Friday",
    "time": "7:00 PM",
    "group": "3rd Friday - AA Potluck/Speakers",
    "type": "Hybrid",
    "host": "Celia K"
  },
  {
    "order": 4.5,
    "day": "Wednesday",
    "time": "8:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Kyle W"
  },
  {
    "order": 6.3,
    "day": "Friday",
    "time": "5:30 PM",
    "group": "AA Women - Except 3rd Friday",
    "type": "In Person",
    "host": "Sue B & Liz L"
  },
  {
    "order": 1.1,
    "day": "Sunday",
    "time": "10:30 AM",
    "group": "AA Open",
    "type": "Hybrid",
    "host": "Jim D & Will C"
  },
  {
    "order": 6.1,
    "day": "Friday",
    "time": "8:00 AM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Melanie M"
  },
  {
    "order": 7.2,
    "day": "Saturday",
    "time": "9:30 AM",
    "group": "AA Women",
    "type": "Hybrid",
    "host": "Barb W & Kelly Y"
  },
  {
    "order": 3.4,
    "day": "Tuesday",
    "time": "8:00 PM",
    "group": "AA Open",
    "type": "Zoom",
    "host": "Chris B"
  },
  {
    "order": 6.2,
    "day": "Friday",
    "time": "12:00 PM",
    "group": "AA Open BB Study",
    "type": "Hybrid",
    "host": "Suzanne C & Scotty E"
  }
 ]

module.exports = {
  meetings
}