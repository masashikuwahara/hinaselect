<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hina">
    <div class="member">
      <div><img :src="image" alt="nanashi" class="men" /></div>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<style scoped>
.name {
  font-size: 2rem;
}

.member {
  float: left;
  margin: auto;
}

.hina {
  display: inline-block;
  margin: 2px;
}

@media screen and (max-width:450px) { 
  .men {
    width: 179px;
  }
}
</style>
