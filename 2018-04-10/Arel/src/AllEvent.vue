<template>
	<div>
		<ul>
			<li v-for="item in eventData">
				<router-link :to="dateReform(item.speech_date)"><span>{{item.speech_date}}</span></router-link> - {{item.class}} - {{item.title}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'AllEvent',
  data () {
    return {
    	eventData: null
    }
  },
  methods: {
  	dateReform(dateStr) {
  		return `/date/`.concat(dateStr.replace(/-/g, '/'));
  	}
  },
  mounted () {
    this.$http.get('https://devche.com/api/speech/data')
      .then(res => {
        this.eventData = res.data.result
          .sort((a, b) => {
            if(a.speech_date <= b.speech_date) {
              return 1
            } else {
              return -1;
            }
          })
        console.log(this.eventData)
      })
  },  
}
</script>

<style lang="scss" scoped>

ul {
	list-style-type: none;
	padding-left: 0;
	li {
		margin-bottom: 0.5rem;
		span {
			color: blue;
		}
	}
}

</style>