<template>
	<div class="header">
		<h2>
			Wishlist {{ list }}
		</h2>
	</div>
</template>

<script>
export default {
	computed: {
		list() {
			return this.$store.getters['wishlist/total']
		}
	}
}
</script>

<style lang="scss">
</style>
