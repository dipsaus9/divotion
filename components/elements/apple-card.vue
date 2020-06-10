<template>
	<article class="apple-card">
		<div class="apple-card__image-container">
			<img :src="images.length ? images[0] : '/placeholder.png'" :alt="`Foto van ${name}`" class="apple-card__image" />
		</div>
		<div class="apple-card__content">
			<h3>
				{{ name }}
			</h3>
			<p>
				{{ description }}
			</p>
		</div>
		<div class="apple-card__wishlist">
			<button :value="text" class="apple-card__button" @click="!qty ? qty = 1 : qty = 0">
				<svg viewBox="0 0 100 100" class="apple-card__svg" :class="{ 'apple-card__svg--active' : qty }">
					<path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
				</svg>
			</button>
		</div>
		<WishlistWidget :id="id" class="apple-card__wishlist-widget" />
	</article>
</template>
<script>
export default {
	components: {
		WishlistWidget: () => import('~/components/elements/wishlist-widget.vue')
	},
	props: {
		name: {
			type: String,
			default: ''
		},
		id: {
			type: Number,
			default: 0
		},
		images: {
			type: Array,
			default: () => []
		},
		description: {
			type: String,
			default: ''
		}
	},
	computed: {
		text() {
			if (!this.qty) {
				return 'Voeg toe aan verlanglijst'
			} else {
				return 'Verwijder uit verlanglijst'
			}
		},
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
.apple-card {
	position: relative;
	background: color(Light);
	&__image-container {
		position: relative;
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 100%;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, color(Dark, 0.5), transparent);
		}
	}
	&__image {
		position: absolute;
		top: 50%;
		left: 50%;
		max-width: 100%;
		transform: translate(-50%, -50%);
	}
	&__content {
		padding: rem(32);
	}
	&__wishlist {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 1;
		display: flex;
		flex-direction: column;
	}
	&__button {
		width: rem(32);
		height: rem(32);
		border: none;
		outline: none;
		background: transparent;
		text-indent: -9999px;
		cursor: pointer;
		&::before {
			content: attr(value);
			position: absolute;
			top: 0;
			right: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: rem(240);
			height: rem(32);
			font-weight: 400;
			font-size: 1rem;
			font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
			text-indent: 0;
			overflow: hidden;
			clip-path: inset(0 0 0 100%);
			transition: $base-transition $bounce-ease;
			padding: 0 10px;
		}
		&:hover {
			&::before {
				clip-path: inset(0 0 0 0);
			}
			svg {
				animation: bounce $base-transition ease-in-out;
			}
		}
	}
	&__svg {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
		width: rem(32);
		height: rem(32);
		transform: scale(1);
		transition: $base-transition $bounce-ease;
		fill: transparent;
		stroke: color(Heart);
		pointer-events: none;
		stroke-width: 3px;
		&--active {
			fill: color(Heart);
		}
	}
	&__wishlist-widget {
		position: absolute;
		top: 2rem;
		right: 1rem;
		padding: 0;
	}
}
</style>