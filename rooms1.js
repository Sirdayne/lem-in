let rooms = [
    {
        "name": "1",
        "x": 23,
        "y": 3,
        "links": ["3"],
        "status": "start"
    },
    {
        "name": "2",
        "x": 16,
        "y": 7,
        "links": ["1"]
    },
    {
        "name": "3",
        "x": 16,
        "y": 3,
        "links": ["5"]
    },
    {
        "name": "4",
        "x": 16,
        "y": 5,
        "links": ["3", "2"]
    },
    {
        "name": "5",
        "x": 9,
        "y": 3,
        "links": ["2"]
    },
    {
        "name": "6",
        "x": 1,
        "y": 5,
        "links": ["5"]
    },
    {
        "name": "7",
        "x": 4,
        "y": 8,
        "links": ["6", "2", "4"]
    },
    {
        "name": "0",
        "x": 9,
        "y": 5,
        "links": ["4", "6"],
        "status": "end"
    }
]