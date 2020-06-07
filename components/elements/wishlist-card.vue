<template>
	<div class="wishlist-card">
		<div class="wishlist-card__content">
			<p class="strong">
				{{ name }}
			</p>
			<p class="wishlist-card__qty strong">
				{{ qty }}x
			</p>
		</div>
		<div v-show="qty" class="wishlist-card__buttons">
			<button class="wishlist-card__amount wishlist-card__amount--subtract" @click="qty--">
				-
			</button>
			<button class="wishlist-card__amount wishlist-card__amount--add" @click="qty++">
				+
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
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
					name: this.name,
					qty: value
				})
			}
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