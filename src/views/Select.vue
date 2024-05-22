<script setup>
import { ref } from 'vue'
import Member from '../components/Member.vue'

// 画像パスを配列で管理する。Array.from()であらかじめ決められた数の配列を作成。
//それに合わせてファイル名も変更かな。
const imagePaths = Array.from({ length: 28 }, (_, i) => 
new URL(`../assets/${i + 1}.jpg`, import.meta.url).href)

const members = ref([
  { name: '加藤史帆', image: imagePaths[0] },
  { name: '佐々木久美', image: imagePaths[1] },
  { name: '佐々木美玲', image: imagePaths[2] },
  { name: '高瀬愛奈', image: imagePaths[3] },
  { name: '高本彩花', image: imagePaths[4] },
  { name: '東村芽依', image: imagePaths[5] },
  { name: '金村美玖', image: imagePaths[6] },
  { name: '河田陽菜', image: imagePaths[7] },
  { name: '小坂菜緒', image: imagePaths[8] },
  { name: '富田鈴花', image: imagePaths[9] },
  { name: '丹生明里', image: imagePaths[10]},
  { name: '濱岸ひより', image: imagePaths[11] },
  { name: '松田好花', image: imagePaths[12] },
  { name: '上村ひなの', image: imagePaths[13] },
  { name: '髙橋未来虹', image: imagePaths[14] },
  { name: '森本茉莉', image: imagePaths[15] },
  { name: '山口陽世', image: imagePaths[16] },
  { name: '石塚瑶季', image: imagePaths[17] },
  { name: '小西夏菜実', image: imagePaths[18] },
  { name: '清水理央', image: imagePaths[19] },
  { name: '正源司陽子', image: imagePaths[20] },
  { name: '竹内希来里', image: imagePaths[21] },
  { name: '平尾帆夏', image: imagePaths[22] },
  { name: '平岡海月', image: imagePaths[23] },
  { name: '藤嶌果歩', image: imagePaths[24] },
  { name: '宮地すみれ', image: imagePaths[25] },
  { name: '山下葉留花', image: imagePaths[26] },
  { name: '渡辺莉奈', image: imagePaths[27] },
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
