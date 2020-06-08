import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import {
	mutations as AppleMutations,
	actions as AppleActions,
	getters as AppleGetters,
	state as AppleState,
} from '../store/apples'

import {
	mutations as WishlistMutations,
	actions as WishlistActions,
	getters as WishlistGetters,
	state as WishlistState,
} from '../store/wishlist'

import AppleOverview from '~/components/section/apple-overview.vue'
import AppleCard from '~/components/elements/apple-card.vue'

/**
 * Setup vue
 */
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test overview', () => {
	let store
	/**
	 * Setup store
	 */
	beforeEach(async () => {
		store = new Vuex.Store({
			modules: {
				wishlist: {
					namespaced: true,
					state: WishlistState,
					getters: WishlistGetters,
					actions: WishlistActions,
					mutations: WishlistMutations
				},
				apples: {
					namespaced: true,
					state: AppleState,
					getters: AppleGetters,
					actions: AppleActions,
					mutations: AppleMutations
				}
			}
		})
		/**
		 * Simulate nuxt client init
		 */
		await store.dispatch('apples/fetchApples')
	})

	/**
	 * Check if the store already has apples
	 */
	it('Has apples', () => {
		expect(store.getters['apples/apples'].length).not.toBe(0)
	})

	/**
	 * Check if the overview is rendering
	 */
	it('Has an overview', () => {
		const overview = shallowMount(AppleOverview, { store, localVue })
		const list = overview.findAll('.apple-overview__item')
		expect(list.length).toBe(store.getters['apples/apples'].length)
	})

	/**
	 * Check if you can add a product to the wishlist
	 */
	it('Add to wishlist', () => {
		const appleCard = shallowMount(AppleCard, {
			store,
			localVue,
			propsData: store.getters['apples/apple'](1)
		})
		const wishlistButton = appleCard.find('.wishlist-widget__button')
		wishlistButton.trigger('click')
		expect(store.getters['wishlist/wishlist'].length).toBe(1)
		expect(store.getters['wishlist/total']).toBe(1)
	})
})
