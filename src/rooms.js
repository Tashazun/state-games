

const centerRoom = {
    title: 'The Altar',
    image: asdfds,
    description: `The floor is cold where you lay in a dazed, half-wakefullness. It sends a shiver through your limbs, but also works to soothe your throbbing headache. After several drawn out minutes you work up to a sitting position to study your surroundings through the thin light. Candles are burning low, scattered throughout the room and casting long shadows over dusty books, rows of opaque bottles and jars on the shelves, and the large pentagram painted in what looks like blood on the floor before you. Terror takes hold and forces you to move, scrambling up you spin around to look for a way out, and find there are four plain, wooden doors in each direction.`, 
    items: [],
    prevent: '',
    question: '',
    answer: '',
    doors: {
        n: northDoor,
        e: eastDoor,
        w: westDoor,
        s: southDoor
    }
},

const northDoor = {
    title: 'The Mirror',
    image: sdfsdf,
    description: 'You open the door on the northern most door and behind it you find an empty room save for a tall mirror hung on the the wall to your right. Entering cautiously you move to stand before it and see that in it\'s gleaming surface is a reflection of of the far wall. Written upon it is the letters "NAHTAIVEL" and beneath it is a wooden box on a table. You turn around in confusion and find that there is only the table in the room with you.',
    items: [],
    prevent: '',
    question: '',
    answer: 'LEVIATHAN',
    doors: {
        s: southDoor
    }
}
const eastDoor = {
    title: asdfsd,
    image: sdfsdf,
    description: 'You enter through the east most door and in the room beyond find a low table with five coins',
    items: [],
    doors: {
        w: westDoor
    }
}
const southDoor = {
    title: asdfsd,
    image: sdfsdf,
    description: afsdf,
    items: [],
    doors: {
        n: northDoor
    }
}
const westDoor = {
    title: asdfsd,
    image: sdfsdf,
    description: afsdf,
    items: [],
    doors: {
        e: eastDoor
    }
}