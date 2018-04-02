<template>
<div class="bulletin">
	<div class="bulletin-header">
		<h2>每週資訊分享活動</h2>
		<button>發佈/管理活動</button>
	</div>
	<ul class="event-filter row">
		<li class="col-4" :class="{active: index === filterActive}" @click="switchCat(index)" v-for="(item, index) in filterCat">{{ item }}</li>
	</ul>
	<div class="events">
		<event-block v-for="item in sortedData(filterStatus)" :cat-img="item['class_img']" :speaker-img="item['speaker_img']" :date="item['speech_date']" :status="item['status']">
			<template slot="title">{{item['title']}}</template>
			<template slot="speaker">{{item['speaker']}}</template>
			<template slot="content">{{item['message']}}</template>
		</event-block>
	</div>
</div>
</template>

<script>
import EventBlock from './EventBlock.vue';

export default {

  name: 'Bulletin',
  components: {
  	EventBlock
  },
  data () {
    return {
    	filterActive: 0,
    	filterCat: [
    		'全部活動',
    		'即將開始活動',
    		'已經結束活動'
    	],
    	eventList: null,
    }
  },
  computed: {
  	filterStatus() {
  		switch(this.filterActive) {
  			case 0:
  				return '';
  				break;
  			case 1:
  				return 'ongoing';
  				break;
  			case 2:
  				return 'end';
  				break;
  		}
  	}
  },
  methods: {
  	switchCat(index) {
  		this.filterActive = index;
  	},
  	sortedData(filterStatus) {
  		return this.eventList
  			.slice()
  			.sort((prev, next) => {
	  			let prevTime = new Date(prev['speech_date']);
	  			let nextTime = new Date(next['speech_date']);
	  			return nextTime - prevTime;
  			})
  			.filter(evt => {
  				if(this.filterStatus !== '') {
  					return evt.status === this.filterStatus;
  				} else {
  					return evt;
  				}
  			});
  	}
  },
  mounted () {
  	this.$http.get('https://devche.com/api/speech/data')
  		.then(res => {
			this.eventList = res.data.result.map(evt => {
				let now = Date.now();
				let eventDateGroup = evt['speech_date'].split('-');
				let eventDate = new Date(eventDateGroup[0], eventDateGroup[1]-1, eventDateGroup[2], 13);
				let year = new Date(now).getFullYear();
				let month = new Date(now).getMonth();
				let date = new Date(now).getDate();
				let day = new Date(now).getDay();
				let today = new Date(year, month, date);
				let weekEnd = new Date(year, month, date + 7 - day);

				if(today - eventDate > 0) {
					evt.status = 'end';
				} else if(eventDate < weekEnd) {
					evt.status = 'ongoing';
				} else {
					evt.status = 'ready';
				}
				return evt;
			})
  		})
  }
}
</script>

<style lang="scss">
$title-color: #0f375b;
$title-color-rev: #FFF;

.bulletin {
	width: 100%;
	max-width: 840px;
	margin: auto;
}

.bulletin-header {
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	h2 {
		color: $title-color;
		align-self: flex-start;
		font-size: 2rem;
		margin: 0;
	}
	button {
		background: #1e8ba6;
		border-radius: 5px;
		align-self: flex-end;
		max-width: 196px;
		color: #FFF;
		padding: 0.2rem 1.3rem;
		font-size: 1.5rem;
	}
}

.event-filter {
	display: flex;
	list-style-type: none;
	padding-left: 0;
	border: 2px solid $title-color;
	border-radius: 10px;
	font-size: 1.5rem;
	margin: 0 0 1.5rem;
	text-align: center;
	color: $title-color;
	li {
		padding: 0.5rem;
		cursor: pointer;
		&:not(:last-child) {
			border-right: 2px solid $title-color;
		}
		&.active {
			background: $title-color;
			color: $title-color-rev;
		}
	}
}
</style>