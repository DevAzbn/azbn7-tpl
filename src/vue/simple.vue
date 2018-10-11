
<template>
	<div id="test">
		<p>{{msg}}</p>
	</div>
</template>

<script>
module.exports = {
	data () {
		return {
			msg : 'Hello world!',
		}
	},
};
window.vueComponents['simple'] = module.exports;
</script>

<style scoped >
#app {
	background-color: #ff0000;
}
</style>
