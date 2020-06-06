<template>
	<main>
		<section class="intro">
			<h1>
				<blockquote>
					An apple a day
					<span class="intro__dot">
						.
					</span>
					<span class="intro__dot">
						.
					</span>
					<span class="intro__dot">
						.
					</span>
				</blockquote>
			</h1>
			<p class="intro__cite">
				Almost every doctor
			</p>
		</section>
		<AppleOverview />
	</main>
</template>
<script>
export default {
	components: {
		AppleOverview: () => import('~/components/section/apple-overview.vue')
	}
}
</script>
