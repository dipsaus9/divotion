<template>
	<div class="header">
		<h2>
			Wishlist {{ total }}
		</h2>
	</div>
</template>

<script>
export default {
	computed: {
		total() {
			return this.$store.getters['wishlist/total']
		}
	}
}
</script>

<style lang="scss">
</style>
