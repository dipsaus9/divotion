module.exports = {
	verbose: true,
	testMatch: ['<rootDir>/test/**.js'],
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
	}
}
