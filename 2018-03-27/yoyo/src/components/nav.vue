<template>
  <div class="navmenu" >
		<nav class="navbar navbar-expand-sm navbar-light container">
		
	  		<img src="@/assets/logo2.png" alt="" class="custom-img">
	  		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    	<span class="navbar-toggler-icon"></span>
	  		</button>
	  		<div class="navbar-collapse collapse row justify-content-end" id="navbarNavAltMarkup">
		    	<div class="navbar-nav">
                <a class="nav-item nav-link" :class="{active: item.active}" v-for="item in navTag" href="#">{{ item.title }}</a>
		    	</div>
	  		</div>
		</nav>
	</div>
</template>

<script>
    export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navTag:[
          {
              title:'HOME',
              active:true
          },
          {
              title:'ABOUT',
              active:false
          },
          {
              title:'GALLERY',
              active:false
          },
          {
              title:'BLOG',
              active:false
          },
          {
              title:'CONTACT',
              active:false
          }
      ]
    }
  }
}
</script>

<style>
.navmenu {
    background: #251b18;
    border-bottom: 1px solid #fff;
    padding: 20px 15px;
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: #fff;
}

.navbar-light .navbar-nav .nav-link {
    color: #fff
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #fff
}

.navbar-light .navbar-nav .nav-link.active {
    color: #f7c845
}

.navbar-light .navbar-toggler {
    color: #fff;
    border-color: #fff;
    background: #f7c645
}

.nav-item.nav-link {
    font-family: 'Oswald', sans-serif
}
.custom-img {
    width: 40%
}
@media (max-width: 600px) {
    .custom-img {
        display: block;
        width: 100%
    }
}
</style>

