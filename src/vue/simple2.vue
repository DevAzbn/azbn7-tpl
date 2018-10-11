
<template>
	<div id="test2">
		<p>{{msg}}</p>
	</div>
</template>

<script>
module.exports = {
	data () {
		return {
			msg : 'Hello world2!',
		}
	},
};
window.vueComponents['simple2'] = module.exports;
</script>

<style scoped >
#app {
	background-color: #ff0000;
}
</style>
