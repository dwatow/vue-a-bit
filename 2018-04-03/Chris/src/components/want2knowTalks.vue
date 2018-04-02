<template lang="html">
  <div class="talk" :class="talk.checkSchedule()">
    <img :src="talk.class_img" alt="" class="class-img">
    <div class="talk-detail">
      <h3 class="title"><a href="" :src="talk.link">{{talk.title}}</a></h3>
      <div class="date">{{talk.speech_date}}</div>
      <div class="tags">{{talk.tags}}</div>
      <div class="speaker">
       <img :src="talk.speaker_img">
       <span class="speaker-name">{{talk.speaker}}</span>
      </div>
      <div class="descripts">{{talk.message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['talk']
  }
</script>

<style lang="scss">
  .talk {
    height: 140px;
    width: auto;
    /* outline: solid red; */
    overflow: hidden;
    position: relative;

    &:nth-child(n+1) {
      margin-top: 12px;
    }
    &.finished::before,
    &.soon::before,
    &.showing::before {
      position: absolute;
      text-align: center;
      writing-mode: vertical-lr;
      vertical-align: middle;
      line-height: 2rem;
      letter-spacing: 0.3rem;
      top: 0;
      right: 0;
      height: 100%;
      color: white;
    }

    &.finished::before {
      content: '已經結束';
      background-color: #79052e;
    }
    &.soon::before {
      content: '即將開始';
      background-color: #1e8ba6;
    }
    &.showing::before {
      content: '本週活動';
      background-color: #5d9b6c;
    }

    .class-img {
      height: 100%;
      float: left;
    }
    &::after {
      content: '';
      display: block;
      clear: left;
    }

    .talk-detail {
      height: calc(100% - 26px);
      padding: 9px 0 15px 17px;
      margin-left: 150px;
      background-color: #1e8ba61a;
      font-size: 0;

      .title {
        margin: 0;
        a {
          font-size: 20px;
          color: #7a062e;
          text-decoration-line: none;
        }
      }



      .speaker,
      .descripts {
        display: inline-block;
        vertical-align: top;
      }

      $speaker-width: 240px;

      .speaker,
      .date {
        width: $speaker-width;
      }
      .date {
        color: #117f7e;
        font-size: 18px;
        margin-top: 3px;
        margin-bottom: 10px;
      }

      .speaker {
        font-size: 20px;
        overflow: auto;
        img,
        .speaker-name {
          display: inline-block;
          vertical-align: middle;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      }

      .descripts {
        font-size: 1rem;
        width: calc(100% - #{$speaker-width} - 18px - 32px);
        height: 3em;
        overflow: auto;
      }

    }
  }
</style>
