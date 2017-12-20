<template>
	<footer class="footer">
		<div>{{FootMsg}}</div>
		<ul class="footer-nav">
			<li v-for="nav in navs">
				<a :href="nav.url">{{nav.name}}</a>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default {
		name: 'headerDiv',
		data() {
			return {
				FootMsg: '文档链接',
				navs: [{
						name: 'vue-router',
						url: 'http://router.vuejs.org/'
					},
					{
						name: 'vuex',
						url: 'http://vuex.vuejs.org/'
					},
					{
						name: 'vue-loader',
						url: 'http://vue-loader.vuejs.org/'
					}
				]
			}
		},
	}
</script>