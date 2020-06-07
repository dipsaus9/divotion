<template>
	<section class="apple-overview background--background">
		<div v-show="apples.length" class="apple-overview__list">
			<AppleCard v-for="(apple, index) of apples" :key="index" class="apple-overview__item" v-bind="apple" />
		</div>
		<div v-show="!apples.length" class="apple-overview__loading">
			De appels worden geplukt, even geduld a.u.b.
		</div>
	</section>
</template>
<script>
import AppleCard from '~/components/elements/apple-card.vue'
export default {
	components: {
		AppleCard
	},
	computed: {
		apples() {
			return this.$store.getters['apples/apples']
		}
	}
}
</script>
<style lang="scss">
.apple-overview {
	padding: grid(2);
	@media #{$small-only} {
		padding: 3rem;
	}
	&__list {
		display: grid;
		grid-column-gap: grid(1);
		grid-row-gap: grid(1);
		grid-template-columns: repeat(4, 1fr);
		@media #{$xxlarge-down} {
			grid-template-columns: repeat(3, 1fr);
		}
		@media #{$medium-down} {
			grid-template-columns: repeat(2, 1fr);
		}
		@media #{$small-only} {
			grid-column-gap: 0;
			grid-row-gap: 2rem;
			grid-template-columns: 1fr;
		}
	}
}
</style>