import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import 'jest-localstorage-mock'
import { mutations, actions, getters, state } from '../store/wishlist'

const product = {
	name: 'Test',
	qty: 1,
	id: 1,
}

const product2 = {
	name: 'Test 2',
	qty: 10,
	id: 2,
}


test('Test fetch apples', async () => {
	/**
	 * Setup local vue and Vuex
	 */
	const localVue = createLocalVue()
	localVue.use(Vuex)
	const store = new Vuex.Store({
		state: state(),
		mutations,
		getters,
		actions
	})

	/**
	 * Checking store is empty on boot
	 */
	expect(store.getters.wishlist.length).toBe(0)
	expect(store.getters.total).toBe(0)

	/**
	 * Adding a single test product 1
	 */
	store.dispatch('changeQty', product)

	/**
	 * Checking store is not empty anymore
	 */
	expect(store.getters.wishlist.length).toBe(1)
	expect(store.getters.total).toBe(1)

	/**
	 * Add another item with more qty (product 2)
	 */
	store.dispatch('changeQty', product2)

	/**
	 * Checking store is filling and reduce function is working
	 */
	expect(store.getters.wishlist.length).toBe(2)
	expect(store.getters.total).toBe(11)

	/**
	 * Remove item again, first change qty of the product
	 */
	product.qty = 0
	store.dispatch('changeQty', product)

	/**
	 * Checking store is removing product1 from store and reduce function again
	 */
	expect(store.getters.wishlist.length).toBe(1)
	expect(store.getters.total).toBe(10)
})

test('Test localstorage sync', () => {
	/**
	 * Check if localstorage is not empty after last session
	 */
	expect(localStorage.getItem('divotion-localstorage-wishlist')).toBe(JSON.stringify([product2]))
})