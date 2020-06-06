export const actions = {
	async nuxtClientInit({ dispatch }) {
		dispatch('apples/fetchApples')
		dispatch('wishlist/syncLocal')
	}
}
