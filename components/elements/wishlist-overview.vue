<template>
	<div class="wishlist-overview" :class="{ 'wishlist-overview--visible' : show }">
		<WishlistCard v-for="(wish, index) of wishlist" :id="wish.id" :key="index" />
		<p v-if="!wishlist.length" class="wishlist-overview__empty strong">
			Verlanglijst is leeg
		</p>
	</div>
</template>

<script>
export default {
	components: {
		WishlistCard: () => import('./wishlist-card.vue')
	},
	props: {
		show: {
			default: false,
			type: Boolean
		}
	},
	computed: {
		wishlist() {
			return this.$store.getters['wishlist/wishlist']
		}
	}
}
</script>

<style lang="scss">
.wishlist-overview {
	position: absolute;
	top: rem(48);
	right: 0;
	display: flex;
	flex-direction: column;
	background: color(Light);
	clip-path: inset(0 0 100% 0);
	transition: $base-transition $bounce-ease;
	&--visible {
		clip-path: inset(0 0 0 0);
	}
	&__empty {
		padding: 1rem;
		white-space: nowrap;
	}
}
</style>
