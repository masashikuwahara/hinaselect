<script setup>
import { ref } from 'vue'
import Member from '../components/Member.vue'
// この部分はかなり強引な方法。改善したい。
const imagePath = new URL('../assets/shiho.jpg', import.meta.url).href
const imagePath2 = new URL('../assets/kumi.jpg', import.meta.url).href
const imagePath3 = new URL('../assets/mirei.jpg', import.meta.url).href
const imagePath4 = new URL('../assets/mana.jpg', import.meta.url).href
const imagePath5 = new URL('../assets/ayaka.jpg', import.meta.url).href
const imagePath6 = new URL('../assets/mei.jpg', import.meta.url).href
const imagePath7 = new URL('../assets/miku.jpg', import.meta.url).href
const imagePath8 = new URL('../assets/hina.jpg', import.meta.url).href
const imagePath9 = new URL('../assets/nao.jpg', import.meta.url).href
const imagePath10 = new URL('../assets/suzuka.jpg', import.meta.url).href
const imagePath11 = new URL('../assets/akari.jpg', import.meta.url).href
const imagePath12 = new URL('../assets/hiyori.jpg', import.meta.url).href
const imagePath13 = new URL('../assets/konoka.jpg', import.meta.url).href
const imagePath14 = new URL('../assets/hinano.jpg', import.meta.url).href
const imagePath15 = new URL('../assets/mikuni.jpg', import.meta.url).href
const imagePath16 = new URL('../assets/marie.jpg', import.meta.url).href
const imagePath17 = new URL('../assets/haruyo.jpg', import.meta.url).href
const imagePath18 = new URL('../assets/tamaki.jpg', import.meta.url).href
const imagePath19 = new URL('../assets/nanami.jpg', import.meta.url).href
const imagePath20 = new URL('../assets/rio.jpg', import.meta.url).href
const imagePath21 = new URL('../assets/yoko.jpg', import.meta.url).href
const imagePath22 = new URL('../assets/kirari.jpg', import.meta.url).href
const imagePath23 = new URL('../assets/hiraho.jpg', import.meta.url).href
const imagePath24 = new URL('../assets/mitsuki.jpg', import.meta.url).href
const imagePath25 = new URL('../assets/kaho.jpg', import.meta.url).href
const imagePath26 = new URL('../assets/sumire.jpg', import.meta.url).href
const imagePath27 = new URL('../assets/haruka.jpg', import.meta.url).href
const imagePath28 = new URL('../assets/rina.jpg', import.meta.url).href

const members = ref([
  { name: '加藤史帆', image: imagePath },
  { name: '佐々木久美', image: imagePath2 },
  { name: '佐々木美玲', image: imagePath3 },
  { name: '高瀬愛奈', image: imagePath4 },
  { name: '高本彩花', image: imagePath5 },
  { name: '東村芽依', image: imagePath6 },
  { name: '金村美玖', image: imagePath7 },
  { name: '河田陽菜', image: imagePath8 },
  { name: '小坂菜緒', image: imagePath9 },
  { name: '富田鈴花', image: imagePath10 },
  { name: '丹生明里', image: imagePath11 },
  { name: '濱岸ひより', image: imagePath12 },
  { name: '松田好花', image: imagePath13 },
  { name: '上村ひなの', image: imagePath14 },
  { name: '髙橋未来虹', image: imagePath15 },
  { name: '森本茉莉', image: imagePath16 },
  { name: '山口陽世', image: imagePath17 },
  { name: '石塚瑶季', image: imagePath18 },
  { name: '小西夏菜実', image: imagePath19 },
  { name: '清水理央', image: imagePath20 },
  { name: '正源司陽子', image: imagePath21 },
  { name: '竹内希来里', image: imagePath22 },
  { name: '平尾帆夏', image: imagePath23 },
  { name: '平岡海月', image: imagePath24 },
  { name: '藤嶌果歩', image: imagePath25 },
  { name: '宮地すみれ', image: imagePath26 },
  { name: '山下葉留花', image: imagePath27 },
  { name: '渡辺莉奈', image: imagePath28 },
])
const pickedMemberIndex = ref(0)
const newMemberIndex = ref(1)
function pickMember(index) {
  pickedMemberIndex.value = index
  newMemberIndex.value++
}
</script>

<template>
  <main>
    <div v-if="newMemberIndex < members.length">
      <h1 class="title">推しメンを選択</h1>
    </div>
    <div v-else>
      <h1 class="title">あなたの推しメンは</h1>
    </div>
    <Member
      :name="members[pickedMemberIndex].name"
      :image="members[pickedMemberIndex].image"
      @click="pickMember(pickedMemberIndex)"
    />
    <template v-if="newMemberIndex < members.length">
      <Member
        :name="members[newMemberIndex].name"
        :image="members[newMemberIndex].image"
        @click="pickMember(newMemberIndex)"
      />
    </template>
    <template v-else>
      <div class="sub">
        <router-link to="/" class="btn btn-outline-info" >トップへ戻る</router-link>
      </div>
      <router-view/>
    </template>
  </main>
</template>

<style scoped>
main {
  margin: 100px auto;
  text-align: center;
}
.title {
  margin-bottom: 60px;
}
</style>
