<template>
	<header class="header">
		<h2 class="header__logo">
			Apples
		</h2>
		<WishlistTrigger />
	</header>
</template>

<script>
import WishlistTrigger from '~/components/elements/wishlist-trigger.vue'
export default {
	components: {
		WishlistTrigger
	}
}
</script>

<style lang="scss">
.header {
	position: fixed;
	top: grid(1);
	z-index: 3;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	padding: grid(0 1);
	@media #{$small-only} {
		top: rem(32);
		padding: rem(0 32);
	}
	&__logo {
		background: color(Light);
		color: color(Dark);
		font-size: rem(32);
		letter-spacing: -1px;
		padding: rem(5 16);
	}
}
</style>
