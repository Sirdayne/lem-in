let rooms = [
    {
        "name": "start",
        "x": 1,
        "y": 6,
        "links": ["t", "h", "0"],
        "status": "start"
    },
    {
        "name": "0",
        "x": 4,
        "y": 8,
        "links": ["o"],
    },
    {
        "name": "o",
        "x": 6,
        "y": 8,
        "links": ["n"],
    },
    {
        "name": "n",
        "x": 6,
        "y": 6,
        "links": ["e", "m"],
    },
    {
        "name": "e",
        "x": 8,
        "y": 4,
        "links": ["end"],
    },
    {
        "name": "t",
        "x": 1,
        "y": 9,
        "links": ["E"],
    },
    {
        "name": "E",
        "x": 5,
        "y": 9,
        "links": ["a"],
    },
    {
        "name": "a",
        "x": 8,
        "y": 9,
        "links": ["m"],
    },
    {
        "name": "m",
        "x": 8,
        "y": 6,
        "links": ["end"],
    },
    {
        "name": "h",
        "x": 4,
        "y": 6,
        "links": ["A", "n"],
    },
    {
        "name": "A",
        "x": 5,
        "y": 2,
        "links": ["c"],
    },
    {
        "name": "c",
        "x": 8,
        "y": 1,
        "links": ["k"],
    },
    {
        "name": "k",
        "x": 11,
        "y": 2,
        "links": ["end"],
    },
    {
        "name": "end",
        "x": 11,
        "y": 6,
        "status": "end"
    }
]