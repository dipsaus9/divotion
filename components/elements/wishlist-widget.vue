<template>
	<div class="wishlist-widget">
		<div v-show="qty" class="wishlist-widget__buttons">
			<button class="wishlist-widget__amount wishlist-widget__amount--subtract" @click="qty--">
				-
			</button>
			<p class="wishlist-widget__qty">
				{{ qty }}
			</p>
			<button class="wishlist-widget__amount wishlist-widget__amount--add" @click="qty++">
				+
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: {
			type: Number,
			default: 0
		}
	},
	computed: {
		qty: {
			get() {
				return this.$store.getters['wishlist/itemQuantity'](this.id)
			},
			set(value) {
				this.$store.dispatch('wishlist/changeQty', {
					id: this.id,
					qty: value
				})
			}
		}
	}
}
</script>
<style lang="scss">
.wishlist-widget {
	display: flex;
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
		align-items: center;
	}
	&__qty {
		margin: 0 rem(5);
		font-weight: 600;
		font-size: 1rem;
	}
	&__amount {
		width: rem(32);
		height: rem(32);
		border: none;
		outline: none;
		background: transparent;
		font-weight: 600;
		font-size: 1.25rem;
		padding: 0;
		cursor: pointer;
		&:hover, &:focus {
			animation: bounce $base-transition ease-in-out;
		}
	}
}
</style>