/* Imports the ClassRoom class from 0-classroom.js */

/* Implements a function that returns an array of 3 ClassRoom */

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  return classrooms;
}
