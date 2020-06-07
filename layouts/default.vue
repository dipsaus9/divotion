<template>
	<div class="layout layout-default">
		<MainHeader />
		<nuxt />
	</div>
</template>

<script>
import MainHeader from '~/components/main/header.vue'
export default {
	components: {
		MainHeader
	}
}
</script>
