<template>
  <div class="hello">
    
    <hello-header></hello-header>

    <div class="content">
      <div class="upside">
        <div class="upside_left">
          <h1>IDEAS?</h1>
          <div class="sub_title">This is just a place holder.</div>
          <div>Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
          </div>
          <div class="btn_info_wrapper">
            <button class="registor_btn" type="button" name="button">TRY IT NOW!</button>
            <div>Don't worry it's for free</div>
          </div>
        </div>
        <div class="upside_right">
          <img src="@/assets/images/download_pic.png">
        </div>
      </div>
      <div class="downside">
          <div class="downside_left">
              <div class="sub_title">This is just a place holder.</div>
            <p>Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,</p>
            <br>
            <p>when an unknown printer took a galley of type and scrambled
               it to make a type specimen book.</p>
            <br>
            <p>It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing </p>
          </div>
          <div class="downside_right">
            <p>Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,</p>
            <br>
            <p>when an unknown printer took a galley of type and scrambled
               it to make a type specimen book.</p>
            <br>
            <p>It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing </p>
          </div>
      </div>
    </div>

    <hello-footer></hello-footer>

  </div>
</template>

<script>
const Nav = () => import ( /* webpackChunkName: "component" */ '@/components/helloNav.vue')
const Header = () => import ( /* webpackChunkName: "component" */ '@/components/header.vue')
const Footer = () => import ( /* webpackChunkName: "component" */ '@/components/footer.vue')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'hello-nav': Nav,
    'hello-header': Header,
    'hello-footer': Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.content {
  margin: 57px;
  text-align: center;
  .upside {
    margin: 0 auto;
    line-height: 28px;
    padding-bottom: 120px;
    .upside_left, .upside_right {
      text-align: left;
      display: inline-block;
      vertical-align: top;
      width: 30%;
      margin: 0px 30px;
    }
    .upside_left {
      h1 {
        font-size: 34px;
        font-weight: lighter;
        margin: 10px 0px;
      }
      .sub_title {
        font-size: 28px;
      }
      .btn_info_wrapper {
        margin-top: 25px;
        width: 50%;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        .registor_btn {
          width: 184px;
          height: 48px;
          border-radius: 5px;
          font-size: 18px;
          color: white;
          cursor: pointer;
          background: linear-gradient(to top, #f99303, #fcb74c);
        }
        div {
          font-size: 12px;
          font-weight: lighter;
          color: rgb(195, 195, 195);
        }
      }

    }
    .upside_right {
      img {
        width: 310px;
        height: 273px;
        cursor: pointer;
      }
    }
  }
  .downside {
    .downside_left, .downside_right {
      text-align: left;
      display: inline-block;
      width: 30%;
      margin: 0px 30px;
    }
    .downside_left {
      .sub_title {
        font-size: 28px;
      }
    }
  }
}


</style>
