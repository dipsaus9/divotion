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
		display: flex;
		align-items: center;
		background: color(Light);
		color: color(Dark);
		font-size: grid(0.5);
		line-height: 1;
		letter-spacing: -1px;
		padding: grid(0.15);
		@include min-('font-size', 0.5, 24);
		@include max-('font-size', 0.5, 64);
		@include min-('padding', 0.15, 10);
	}
}
</style>
