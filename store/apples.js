export const state = () => ({
	apples: []
})

export const mutations = {
	/**
   * Set all apples in once
   */
	setApples(state, apples) {
		state.apples = [...apples]
	}
}

export const actions = {
	/**
	 *	Set apples to store
	 * @param {Object} context - Extract commit to access mutations
	 * @param {Array} apples - All apples
	 */
	setApples({ commit }, apples) {
		commit('setApples', apples)
	},
	/**
	 * Fetch apples json file from local file (webpack chunk)
	 * @param {Object} context - Extract dispatch function to set apples
	 */
	async fetchApples({ dispatch }) {
		const apples = await import('~/data/apples.json').then((data) => data.default)
		if (apples && Array.isArray(apples)) {
			dispatch('setApples', apples)
		}
	}
}

export const getters = {
	apples: (state) => state.apples,
	apple: (state) => (appleID) => state.apple.find((apple) => apple.id === appleID),
}
