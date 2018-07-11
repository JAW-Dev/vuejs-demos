<template>
  <div class="search">
	<p>Simply start typing your search term to display the images.</p>
    <form v-on:keyup="getResult(query)">
		<label>Search: 
			<input type="text" v-model="query" v-on:keydown.enter.prevent=''>
		</label>
	</form>
	<div>
		<app-results :resultsObj="queryResults"></app-results>
	</div>
  </div>
</template>

<script>
import axios from 'axios';
import Results from './Results.vue';

export default {
	name: 'search',
	components: {
		'app-results': Results
	},
	data() {
		return {
			query: '',
			queryResults: []
		}
	},
	methods: {
		getResult(query) {
			let url = 'search?q=' + query + '&media_type=image';
			this.queryResults = [];
			if(query.length >= 2) {
				setTimeout(() => {
					axios.get(url)
						.then(response => {
							const imageArray = Object.keys(response.data.collection.items).map(i => response.data.collection.items[i].links[0].href);
							this.queryResults = response.data.collection.items;
						})
						.catch(error => console.log(error));
				}, 1000);
			}
		}
	}
}
</script>

<style scoped>
.search {
	text-align: center;
	margin: 3rem auto 0;
	max-width: 1200px;
}
input[type="text"] {
	border: 1px solid #CCCCCC;
}
</style>
