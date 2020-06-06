<template>
	<section class="apple-overview">
		{{ apples }}
	</section>
</template>

<style lang="scss">
.apple-overview {
	margin: grid(2) auto;
}
</style>
<script>
export default {
	computed: {
		apples() {
			return this.$store.getters['apples/apples']
		}
	}
}
</script>