

const centerRoom = {
    title: asdf,
    image: asdfds,
    description: S_IFDIR,
    items: [],
    doors: {
        n: northDoor,
        e: eastDoor,
        w: westDoor,
        s: southDoor
    }
},

const northDoor = {
    title: asdfsd,
    image: sdfsdf,
    description: afsdf,
    items: [],
    doors: {
        s: southDoor
    }
}
const eastDoor = {
    title: asdfsd,
    image: sdfsdf,
    description: afsdf,
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