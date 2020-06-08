module.exports = {
	verbose: true,
	testMatch: ['<rootDir>/test/**.js'],
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
	},
	setupFiles: ['jest-localstorage-mock'],
	watchman: false,
	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/$1',
		'^~~/(.*)$': '<rootDir>/$1',
		'^@/(.*)$': '<rootDir>/$1',
	}
}
