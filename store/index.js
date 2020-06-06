export const actions = {
	async nuxtClientInit({ dispatch }) {
		dispatch('wishlist/syncLocal')
	}
}
