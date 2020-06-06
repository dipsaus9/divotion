<template>
	<section class="intro">
		<h1 class="intro__title color--light">
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
		<p class="intro__cite color--light">
			Almost every doctor
		</p>
	</section>
</template>
<style lang="scss">
.intro {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	height: 70vh;
	background: color(Dark);
	padding: grid(0 2);
	@media #{$small-only} {
		padding: 0 2rem;
	}
	&__title {
		animation: fade-in 0.5s $bounce-ease forwards;
	}
	&__dot {
		transform: translateX(#{grid(-1)});
		opacity: 0;
		animation: fade-in $base-transition 0.2s $bounce-ease forwards;
		&:nth-of-type(2) {
			animation-delay: 0.5s;
		}
		&:nth-of-type(3) {
			animation-delay: 0.7s;
		}
	}
	&__cite {
		transform: translateX(#{grid(-1)});
		opacity: 0;
		animation: fade-in $base-transition 1.2s $bounce-ease forwards;
		&::before {
			content: '—';
		}
	}
}
@keyframes fade-in {
	from {
		transform: translateX(#{grid(-1)});
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>