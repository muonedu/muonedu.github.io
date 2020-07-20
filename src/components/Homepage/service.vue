<template>
  <v-container fluid class="grey lighten-5">
    <v-row>
      	<!-- <v-col md="4" lg="4">
        	<v-card class="pa-2" outlined tile>
        		<v-card-title>Development</v-card-title>
        		<v-card-text>Need help building, maintaining & deploying production quality software? Let our experience and expertise help you succeed.
        		</v-card-text>
        		<v-card-actions>
        		</v-card-actions>
        	</v-card>
      	</v-col> -->
       	<v-col md="4" sm="12" lg="4" cols="12" v-for="content in data" :key="content.id">
        	<v-card  outlined tile>
        		<v-card-title>{{content.title}}</v-card-title>
        	</v-card>
      	</v-col>
    </v-row>
  </v-container>
</template>

<script>
	export default {
		data () {
			return {
				data: [
		          {
		            url: require('../../assets/image/corporate.jpeg'),
		            title: 'Online Assesment',
		            desc_1: 'Kami menyediakan layanan Online Assesment untuk kegiatan seperti Olimpiade Nasional, Tugas Sekolah, dan berbagai macam penilaian soal.',
		            desc_2: 'Service yang kami berikan sudah flexibel disesuaikan dengan kebutuhan pemakaian.',
		            desc_3: 'Pengalaman beberapa pihak yang menggunakan service online Assesment telah merasakan kemudahan dalam hal administrasi terutama dalam management soal dan penilaian.',
		            type: 'is-one-third',
		            method: this.corporate
		          },
		          {
		            url: require('../../assets/image/python.jpeg'),
		            title: 'Training Python',
		            desc_1: 'Python adalah merupakan bahasa pemrograman yang paling populer saat ini. banyak perusahaan dan produk melibatkan python dalam pengembangannya terutama dalam bidang komputasi dan Machine Learning.',
		            desc_2: 'Kami menyediakan training membuat system Web baik Monolith ataupun Microservices serta sistem menggunakan Konsep Machine Learning yang bisa diikuti oleh peserta yang tidak mempunyai background pemrograman sebelumnya.',
		            method: this.python
		          },
		          {
		            url: require('../../assets/image/event_python.jpg'),
		            title: 'Event',
		            desc_1: 'Secara rutin, kami membuat kelompok belajar atau Event dengan tema tertentu sesuai dengan trend dan kebutuhan.',
		            desc_2: 'Tujuannya untuk belajar dan beradaptasi dengan teknologi yang sedang maju di dunia saat ini.',
		            method: this.event
		          }

		        ]

			}
		},
		methods: {

		}
	}
</script>