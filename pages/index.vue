<template>
	<main>
		<AppleIntro />
		<AppleOverview />
	</main>
</template>
<script>
import AppleIntro from '~/components/section/apple-intro.vue'
import AppleOverview from '~/components/section/apple-overview.vue'
export default {
	components: {
		AppleIntro,
		AppleOverview
	}
}
</script>
