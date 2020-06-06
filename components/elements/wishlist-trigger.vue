<template>
	<div class="wishlist-trigger">
		<button class="wishlist-trigger__button" @click="toggleWishlist">
			{{ total }}
			<svg viewBox="0 0 100 100" class="wishlist-trigger__svg">
				<path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
			</svg>
		</button>
		<WishlistOverview :show="open" />
	</div>
</template>

<script>
export default {
	components: {
		WishlistOverview: () => import('./wishlist-overview.vue')
	},
	data: () => ({
		open: false
	}),
	computed: {
		total() {
			return this.$store.getters['wishlist/total']
		}
	},
	methods: {
		toggleWishlist() {
			this.open = !this.open
		}
	}
}
</script>

<style lang="scss">
.wishlist-trigger {
	position: relative;
	&__button {
		box-shadow: none;
		border: 1px solid color(Black);
		outline: none;
		background: color(Light);
		cursor: pointer;
		padding: 0.5rem 0.75rem;
	}
	&__svg {
		fill: color(Heart);
	}
}
</style>
