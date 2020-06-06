const localStorageKey = 'divotion-localstorage-wishlist'

export const state = () => ({
	wishlist: [],
	totalQuantity: 0
})

export const mutations = {
	/**
	 * Add product to wishlist
	 */
	addToWishlist(state, product) {
		state.wishlist.push({product})
	}
}

export const actions = {
	/**
	* Add product to wishlist
	* @param {Object} context - Extract commit to access mutations
	* @param {Object} product - Product object (ID, and QTY)
	*/
	addToWishlist({ commit }, product) {
		commit('addToWishlist', product)
	},
	/**
	* Sync wishlist with localstorage
	* @param {Object} context - Extract commit to access mutations
	*/
	syncLocal({ commit }) {
		if (process.client && window.localStorage) {
			const storageWishlist = localStorage.getItem(localStorageKey)
			console.log(storageWishlist)
		}
	},
}

export const getters = {
	total: (state) => state.totalQuantity
}