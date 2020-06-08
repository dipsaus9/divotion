import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// import Actions from '../components/elements/test.vue'
import { mutations, actions, getters, state } from '../store/apples'

test('Test fetch apples', async () => {
	const localVue = createLocalVue()
	localVue.use(Vuex)
	const store = new Vuex.Store({
		state: state(),
		mutations,
		getters,
		actions
	})
	expect(store.getters.apples.length).toBe(0)
	await store.dispatch('fetchApples')
	expect(store.getters.apples.length).not.toBe(0)
	expect(store.getters.apple(1)).toBeDefined()
})