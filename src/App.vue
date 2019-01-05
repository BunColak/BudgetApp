<template>
  <div id="app" class="uk-container">
    <nav id="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.theme.less";

html,
body {
  background: #009688;
}

nav {
  margin: 30px 0;
  background: white;
  li {
    a {
      color: #0d47a1 !important;

      &:hover {
        color: darken(#0d47a1, 40%);
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}

#app {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {
  name: "App"
};
</script>
