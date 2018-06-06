const centerRoom = {
  title: 'The Center Room',
  image: 'https://images.gamewatcherstatic.com/image/file/8/9f/81008/large_20161023000504_1.jpg',
  description: 'At Center Room',
  items: [],
  doors: {
    n: 'northRoom',
    e: 'eastRoom',
    w: 'westRoom',
    s: 'southRoom'
  }
};

const northRoom = {
  title: 'The North Room',
  image: 'https://toghs.files.wordpress.com/2008/02/inside-of-cabin1.jpg',
  description: 'At North Room',
  items: [],
  doors: {
    s: 'centerRoom'
  }
};

const eastRoom = {
  title: 'The East Room',
  image: 'https://i.imgur.com/tfdjJ5Gr.jpg',
  description: 'At East Room',
  items: [],
  doors: {
    w: 'centerRoom'
  }
};

const southRoom = {
  title: 'The South Room',
  image: 'https://follyfancier.files.wordpress.com/2010/03/ny-cabin01-popup.jpg',
  description: 'At South Room',
  items: [],
  doors: {
    n: 'centerRoom'
  }
};

const westRoom = {
  title: 'The West Room',
  image: 'https://www.aprilshowersmovie.com/wp-content/uploads/2018/05/Surviving-Horror-Escape-Rooms.jpg',
  description: 'At West Room',
  items: [],
  doors: {
    e: 'centerRoom'
  }
};

export const rooms = {
  centerRoom,
  northRoom,
  eastRoom,
  southRoom,
  westRoom
};

export const start = centerRoom;