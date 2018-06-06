const centerRoom = {
  title: 'The Altar',
  image: 'https://images.gamewatcherstatic.com/image/file/8/9f/81008/large_20161023000504_1.jpg',
  description: 'The floor is cold where you lay in a dazed, half-wakefullness. It sends a shiver through your limbs, but also works to soothe your throbbing headache. After several drawn out minutes you work up to a sitting position to study your surroundings through the thin light. Candles are burning low, scattered throughout the room and casting long shadows over dusty books, rows of opaque bottles and jars on the shelves, and the large pentagram painted in what looks like blood on the floor before you. Terror takes hold and forces you to move, scrambling up you spin around to look for a way out, and find there are four plain, wooden doors in each direction.',
  items: [],
  doors: {
    n: 'northRoom',
    e: 'eastRoom',
    w: 'westRoom',
    s: 'southRoom'
  }
};

const northRoom = {
  title: 'The Mirror',
  image: 'https://toghs.files.wordpress.com/2008/02/inside-of-cabin1.jpg',
  description: 'You open the door on the northern most door and behind it you find an empty room save for a tall mirror hung on the the wall to your right. Entering cautiously you move to stand before it and see that in it\'s gleaming surface is a reflection of of the far wall. Written upon it is the letters "NAHTAIVEL" and beneath it is a wooden box on a table. You turn around in confusion and find that there is only the table in the room with you.',
  items: [],
  prevent: '',
  question: '',
  answer: 'LEVIATHAN',
  doors: {
    s: 'centerRoom'
  }
};


const eastRoom = {
  title: 'The East Room',
  image: 'https://i.imgur.com/tfdjJ5Gr.jpg',
  description: 'You enter through the east most door and in the room beyond find a low table with five coins',
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




