<template>
  <div>
    <div>
      <p>表示数: {{ currentData.length }}軒</p>
      <span v-if="currentFilter"><b>フィルター:</b>{{ currentFilter }}</span>
      <v-btn @click="clear" outline color="primary">クリア</v-btn>
      <v-btn @click="shuffle" outline color="primary">シャッフル</v-btn>
    </div>
    <transition-group class="flex" name="pics">
      <div class="box" v-for="item in currentData" :key="item.id">
        <v-card tile>
          <v-img :src="item.picUrl" aspect-ratio="1.75" class="grey lighten-2" lazy-src>
          </v-img>
          <div class="content-box">
            <a class="link headline" target="_blank" :href="item.url"
              ><b>{{ item.name }}</b></a
            >
            <v-icon v-if="item.done" color="success">done</v-icon>
            <div class="tag-area">
              <v-chip
                class="tag"
                v-for="tag in item.tags"
                :key="tag"
                @click="filter(tag);"
                >{{ tag }}</v-chip
              >
            </div>
            <p>{{ item.description }}</p>
          </div>
        </v-card>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  computed: {
    currentFilter() {
      return this.$store.state.currentFilter;
    },
    currentData() {
      return this.$store.state.currentData;
    }
  },
  methods: {
    clear() {
      this.$store.commit("clear");
    },
    filter(tag) {
      this.$store.commit("filter", tag);
    },
    shuffle() {
      this.$store.commit("shuffle");
    }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.box {
  width: 50%;
  max-height: 600px;
  padding: 5px;
  box-sizing: border-box;
  filter: drop-shadow(2px 2px 5px #aaa);
}
.pic-box {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  background: #333;
  overflow: hidden;
}
.content-box {
  box-sizing: border-box;
  padding: 10px;
  background: #fafafa;
}
.tag {
  background: #eee;
  padding: 5px;
  margin: 5px;
}
.tag-area {
  box-sizing: border-box;
  padding: 10px;
}
.link {
  margin-bottom: 15px;
}
@media screen and (max-width: 480px) {
  .box {
    width: 100%;
    max-height: 500px;
    margin: 5px;
    box-sizing: border-box;
  }
}
@media screen and (min-width: 900px) {
  .box {
    width: 33.3%;
    max-height: 500px;
    padding: 5px;
    box-sizing: border-box;
  }
}
.pics-item {
  display: inline-block;
}
.pics-enter-active,
.pics-leave-active {
  transition: all 1s ease;
}
.pics-enter,
.pics-leave-to {
  opacity: 0;
  filter: blur(10px);
}
.pics-move {
  transition: transform 1s;
}
</style>
