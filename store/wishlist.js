const localStorageKey = 'divotion-localstorage-wishlist'

export const state = () => ({
	wishlist: [],
	totalQuantity: 0
})

export const mutations = {
	/**
	 * Set complete wishlist state
	 * @param {Object} state
	 * @param {Array} wishlist
	 */
	setWishlist(state, wishlist) {
		state.wishlist = wishlist
	},
	/**
	 * Add a product to the wishlist
	 * @param {Object} state
	 * @param {Object} product
	 */
	addToWishlist(state, product) {
		const indexOf = state.wishlist.findIndex(
			(stateProduct) => product.id === stateProduct.id
		)
		if (indexOf > -1) {
			state.wishlist[indexOf].qty = product.qty
		} else {
			state.wishlist.push({...product})
		}
	},
	/**
	 * Remove product from wishlist based on ID
	 * @param {Object} state
	 * @param {Number} id - Product ID
	 */
	removeFromWishlist(state, id) {
		const indexOf = state.wishlist.findIndex((product) => product.id === id)
		state.wishlist.splice(indexOf, 1)
	},
	/**
	 * Set totals based on reduce function
	 * @param {Object} state
	 * @param {Number} total
	 */
	setTotals(state, total) {
		state.totalQuantity = total
	}
}

export const actions = {
	/**
	* Add product to wishlist
	* @param {Object} context - Vuex context
	* @param {Object} product - Product object (id, name and QTY)
	*/
	addToWishlist({ commit, dispatch }, product) {
		commit('addToWishlist', product)
		dispatch('calculateTotals')
		dispatch('syncStoreToLocal')
	},
	/**
	 *
	 * @param {Object} context - Vuex context
	 * @param {Number} id - ID of the product
	 */
	removeFromWishlist({ commit, dispatch }, id) {
		commit('removeFromWishlist', id)
		dispatch('calculateTotals')
		dispatch('syncStoreToLocal')
	},
	/**
	 * Change qty from wishlist item if set, otherwise add it
	 * @param {Object} context - Vuex context
	 * @param {Object} product - id, name and qty
	 */
	changeQty({ dispatch }, product) {
		if (!product.qty) {
			dispatch('removeFromWishlist', product.id)
		} else {
			dispatch('addToWishlist', product)
		}
	},
	/**
	 * Calcualte totals based on wishlist
	 * @param {Object} context - Vuex context
	 */
	calculateTotals({ commit, getters }) {
		const wishlist = getters.wishlist
		const totals = wishlist.reduce((a, b) => a + b.qty, 0)
		commit('setTotals', totals)
	},
	/**
	* Sync wishlist from localstorage
	* @param {Object} context - Vuex context
	*/
	syncLocalToStore({ commit, dispatch }) {
		if (window.localStorage) {
			const storageWishlist = localStorage.getItem(localStorageKey)
			if (storageWishlist) {
				commit('setWishlist', JSON.parse(storageWishlist))
				dispatch('calculateTotals')
			}
		}
	},
	/**
	* Sync wishlist to localstorage
	* @param {Object} context - Extract commit to access mutations
	*/
	syncStoreToLocal({ getters }) {
		if (window.localStorage) {
			localStorage.setItem(
				localStorageKey,
				JSON.stringify(getters.wishlist)
			)
		}
	},
}

export const getters = {
	total: (state) => state.totalQuantity,
	wishlist: (state) => state.wishlist,
	item: (state) => (id) => state.wishlist.find((product) => product.id === id),
	itemQuantity: (state, getters) => (id) => {
		const item = getters.item(id)
		if (item) {
			return item.qty
		} else {
			return 0
		}
	}
}