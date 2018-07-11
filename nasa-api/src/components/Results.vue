<template>
	<div v-if="resultsObj.length > 0" class="gallery">
		<div v-for="(result, index) in resultsObj" :key="index" class="gallery__wrapper">
			<app-item :itemSrc="result.links[0].href" :itemAlt="result.data[0].description"></app-item>
		</div>
	</div>
	<div v-else>
		<p>No Results</p>
	</div>
</template>

<script>
import Item from './Item.vue';

export default {
	components: {
	  'app-item': Item
    },
	props: ['resultsObj']
}
</script>

<style scoped>
.gallery {
	align-items: center;
	display: -ms-flexbox;
	display: -webkit-box;
	display: flex;
	font-size: 0;
	flex-direction: column;
	flex-flow: row wrap; 
	flex-wrap: wrap;
	margin-top: 3rem;
	padding: 0.5rem;
}
.gallery .gallery__wrapper {
	flex: auto;
	margin: 0.5rem;
	width: 200px;
}
@media screen and (max-width: 400px) {
	.gallery {
		padding: 0;
	}
	.gallery .gallery__wrapper {
		margin: 0;
		margin-bottom: 1rem;
	}
}
</style>
