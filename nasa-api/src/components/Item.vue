<template>
	<div>
		<img :src="itemSrc" :alt="itemAlt" @click="toggle" class="gallery__image">
		<div class="gallery__modal" v-if="isActive" @click="toggle">
			<div class="image__close">X</div>
			<img :src="itemSrc" :alt="itemAlt">
		</div>
	</div>
</template>

<script>

export default {
	props: ['itemSrc', 'itemAlt'],
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		}
	}
}
</script>

<style scoped>
.gallery .gallery__image {
	box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);
	max-height: 200px;
	max-width: 200px;
}
.gallery .gallery__image:hover {
	cursor: pointer;
}
.gallery .gallery__modal {
	align-items: center;
	background-color: rgba(0,0,0,0.9);
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	position: fixed;
	text-align: center;
	top: 0;
	width: 100%;
}
.gallery__modal img {
	border: 3px solid #FFFFFF;
}
.gallery__modal .image__close{
	color: #FFFFFF;
	font-weight: bold;
	font-size: 1rem;
	position: absolute;
	right: 1rem;
	top: 1rem;
}
.gallery__modal .image__close:hover {
	cursor: pointer;
}
</style>
