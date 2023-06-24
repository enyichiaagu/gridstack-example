const serializedData = [
	{ x: 0, y: 0, w: 2, h: 2 },
	{ x: 0, y: 2, w: 3, content: 'item 2' },
	{ x: 0, y: 3 },
]

const options = {
	styleInHead: false,
	margin: 5,
	resizable: {
		handles: 'e, se, s, sw, w'
	}
}

const grid = GridStack.init(options)
grid.load(serializedData)
