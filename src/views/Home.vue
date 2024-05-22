<template>
<h1>Hinaselect</h1>
<div class="sub">
  <h2>日向坂46の推しメン選びアプリの簡易版です。推しメン1人を選ぶことができます。</h2>
  <router-link to="/select" class="btn btn-outline-info" >スタート！</router-link>
</div>
<router-view/>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
h1 {
  width: 350px;
  margin: 0 auto;
  text-align: center;
}

.sub {
  text-align: center;
  margin-top: 30px;
}
</style>

