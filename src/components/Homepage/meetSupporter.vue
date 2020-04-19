<template>
	<div >
		<v-container>
		<v-row justify="center" class="mt-12" style="font-size:40px;font-weight:bold">
			<h1>MEET THE TEAM</h1>
		</v-row>
		<v-row no-gutters class="mt-12" justify="center">
			<v-col sm="3" class="text-center mb-12">
				<v-avatar width="250" height="250">
			      <img
			        src="../../assets/image/ikhsan.jpeg"
			        alt="Ikhsan">
			    </v-avatar>
			    <h3 class="text-center mt-12">Ikhsan Rahman Husein</h3>
			    <hr class="mx-12" style="background:black">
			    <h2>Full Stack Engineer and Machine Learning Practicioner</h2>
		    </v-col>
		    <v-col sm="3" class="text-center mb-12">
			    <v-avatar width="250" height="250">
			      <img
			        src="../../assets/image/vicky.jpeg"
			        alt="tallo">
			    </v-avatar>
			    <h3 class="text-center mt-12">Vicky Vernando Dasta</h3>
			    <hr class="mx-12" style="background:black">
			    <h2>Full Stack Web Developer</h2>
		    </v-col>
		    <br>
		    <v-col sm="3" class="text-center mb-12">
			    <v-avatar width="250" height="250">
			      <img
			        src="../../assets/image/Ira.jpg"
			        alt="tobing">
			    </v-avatar>
			    <h3 class="text-center mt-12">Humaira Shaufia S.Si</h3>
			    <hr class="mx-12" style="background:black">
			    <h2>Marketing and Business Consultant</h2>
		    </v-col>
		</v-row>
	</v-container>
	</div>	
	
</template>

<script>
	export default {
		data () {
			return {
				data: [
					{
						url: require('../../assets/image/vicky.jpeg'),
						description: 'Vicky adalah salah satu founder Muon yang pernah memiliki Keahlian Python dan sudah berpengalaman menjadi pembicara di sejumlah pelatihan dan juga seminar.'
					},
					{
						url: require('../../assets/image/ikhsan.jpeg'),
						description: 'Ikhsan adalah salah satu founder Muon yang pernah memiliki Keahlian Python dan sudah berpengalaman menjadi pembicara di sejumlah pelatihan dan juga seminar.'
					}
				]
			}
		}
	}
</script>

<style scoped>

</style>