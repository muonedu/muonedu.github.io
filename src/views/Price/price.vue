<template>
	<v-container fluid>
        <v-row justify="center">
            <v-col class="text-center col-lg-6"> 
                <h1>Daftar Training</h1>
                <p>
                	Dalam Training ini, kamu akan dilatih hingga bisa menguasai beberapa framework. selain itu, kamu juga akan belajar disertai dengan project sehingga kamu bisa merasakan secara langsung.
                </p>

            </v-col>
        </v-row>
        <br>
        <v-row justify="center" class="service">
            <v-col class=" col-lg-3" 
                md="6" sm="12" cols="12" 
                v-for="content in data" 
                :key="content.id">
                <v-card outlined flat="true">
                    <v-card-title class="title-service mb-2">
                        <v-icon style="font-size:60px;color:#1565C0">{{content.mdi}}</v-icon>{{content.title}}
                    </v-card-title>
                    <v-card-text class="text">{{content.desc_1}}</v-card-text>
                    <v-card-actions>
                        <v-btn text rounded=true style="color:#F44336"> <v-icon>mdi-eye-settings</v-icon> &nbsp;Lihat</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
        </v-row>
       
    </v-container>

</template>

<script>
	
	export default {
		name: 'Price',
		components: {

		},
		data () {
			return {
				data: [
					{
						title: 'From Zero to Hero: Python Basic',
						price: '1.500.000',
						discount: '700.000',
						desc_1: 'Durasi selama 6 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Flask, OOP, ORM, SQL Database and Chat Apps',
						link: 'https://forms.gle/nRWpEdXzu9MdH8f69'
					},
					{
						title: 'Python Intermediate',
						soon: 'Coming Soon',
						// price: '2.000.000',
						// discount: '800.000',
						desc_1: 'Durasi selama 6 Minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Mongodb, Complex Monolith and Microservices',
						// link: 'https://forms.gle/8AaNS2fkhtWLyxT66'
					},
					{
						title: 'Python Advanced',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'IOT',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Arduino',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Raspberry Pi',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Web Development',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Dekstop Application',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Simulation',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					},
					{
						title: 'Machine Learning',
						soon: 'Coming Soon',
						// price: '3.000.000',
						// discount: '1.000.000',
						desc_1: 'Durasi selama 7 minggu',
						desc_2: 'Dilakukan secara full onsite',
						desc_3: 'Dibimbing oleh praktisi Python, Machine Learning dan Computer Vision Expert',
						desc_4: 'Computer Vision and Machine Learning',
						// link: 'https://forms.gle/X3FCGnvjoWKjEbMaA'
					}
				]
			}
		}
	}
</script>

<style scoped>
	h1{
      letter-spacing: 15px;
      font-weight: bold;
      font-family:Courier New;
      font-size: 40px;
    }
    .title-service {
        letter-spacing: 1px;
        font-family:Courier New;
        font-size: 27px;
    }
    p, .text{
      letter-spacing: 2px;
      font-family:Courier New;
    }
    .service {
        font-size:30px;
    }
	
</style>