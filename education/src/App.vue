<template>
	<div id="app">
		<HeaderDiv></HeaderDiv>
		<router-view></router-view>
		<FooterDiv></FooterDiv>
	</div>
</template>

<script>
	import HeaderDiv from './components/header'
	import FooterDiv from './components/footer'
	export default {
		name: 'app',
		components: {
			HeaderDiv,
			FooterDiv
		},
		data() {
			return {
				
			}
		},
		
	}
</script>