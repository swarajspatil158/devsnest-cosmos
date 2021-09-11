const fs = require('fs')

// fs.readFile takes the file path and the callback
fs.readFile('README.md', (err, data) => {

	// if there's an error, log it and return
	if (err) {
		console.error(err)
		return
	}

	// Print the string representation of the data
	console.log(data.toString())
})

fs.writeFile('README.md', '# Read,Write,Execute,Loop', (err) => {
	// If there is any error in writing to the file, return
	if (err) {
		console.error(err)
		return
	}

	// Log this message if the file was written to successfully
	console.log('wrote to file successfully')
})