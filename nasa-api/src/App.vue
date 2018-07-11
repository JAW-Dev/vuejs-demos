<template>
	<div id="app">
		<app-header></app-header>
		<app-search></app-search>
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

export default {
	name: "app",
	components: {
		'app-header': Header,
		'app-search': Search
	}
};
</script>

<style>
</style>
