<script>
import Navbar from './components/Navbar'
export default {
    components: {
        Navbar: Navbar
    }
}
</script>
<template>
  <div id="app">
      <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import url('https://fonts.googleapis.com/css?family=Kanit:500,600|Roboto:400,500');

@import "./assets/scss/main";

@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #15D17A;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$family-sans-serif: 'Roboto', sans-serif;
$family-secondary: 'Kanit', sans-serif;
$fullhd-enabled:false;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

