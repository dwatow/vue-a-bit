<template>
	<div>
		<h2>Date: {{fullDate}}</h2>
		<ul>
			<li v-for="item in eventData">
				<div class="event-block">
					<h3 class="title">{{item.title}}</h3>
					<p class="tag">{{item.class}}</p>
					<p class="speaker">{{item.speaker}}</p>
					<p class="content">{{item.message}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'AllEvent',
  data () {
    return {
    	year: this.$route.params.year,
    	month: this.$route.params.month,
    	date: this.$route.params.date,
    	eventData: null
    }
  },
  computed: {
  	fullDate () {
  		return `${this.year}-${this.month}-${this.date}`
  	}
  },
  mounted () {
  	this.$http.get('https://devche.com/api/speech/data')
  		.then(res => {
  			this.eventData = res.data.result
  				.filter(event => event.speech_date === this.fullDate)
  		})
  }
}
</script>

<style lang="scss" scoped>
ul {
	list-style-type: none;
	padding-left: 0;
	li {
		margin-bottom: 2rem;
	}
}

.event-block {
	.title {
		color: #00ADB5;
	}
	background-color: #222831;
	color: #EEE;
	padding: 1rem;
	border-radius: 1rem;
	border: 2px solid #393E46;
}
</style>