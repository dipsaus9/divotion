<template>
	<div class="wishlist-card">
		<div class="wishlist-card__content">
			<p class="strong">
				{{ wishlist.name }}
			</p>
		</div>
		<WishlistWidget :id="id" />
	</div>
</template>
<script>
export default {
	components: {
		WishlistWidget: () => import('~/components/elements/wishlist-widget.vue')
	},
	props: {
		id: {
			type: Number,
			default: 0
		}
	},
	computed: {
		wishlist() {
			return this.$store.getters['wishlist/item'](this.id)
		}
	}
}
</script>
<style lang="scss">
.wishlist-card {
	display: flex;
	padding: 1rem 2rem;
	&__content {
		display: flex;
		align-items: center;
		p {
			white-space: nowrap;
		}
	}
	&__buttons {
		margin: 1rem 0 1rem 1rem;
		display: flex;
	}
	&__qty {
		margin-left: rem(5);
		&:before {
			content: '—';
		}
	}
	&__amount {
		width: rem(32);
		height: rem(32);
		border: none;
		outline: none;
		background: transparent;
		font-weight: 600;
		font-size: 1.5rem;
		padding: 0;
		cursor: pointer;
		&:hover, &:focus {
			animation: bounce $base-transition ease-in-out;
		}
	}
}
</style>