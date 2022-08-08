<template>
  <div
    class="w-full bg-white select-none p-12 2xl:p-12 xl:px-8 xl:py-12 xl:pb-14 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-0 mb-12 shadow-md xl:min-h-[300px]"
  >
    <div>
      <img class="w-5" src="@/assets/quote-left.png" alt="quote-left" />
    </div>

    <p class="my-5 text-left text-base font-bold line-clamp">
      {{ content }}
    </p>
    <div class="flex justify-end">
      <img class="w-5" src="@/assets/quote-right.png" alt="quote-left" />
    </div>

    <!-- Client info -->
    <div
      class="client-info absolute bottom-0 left-0 px-6 xl:px-2 2xl:px-6 flex ssm:left-6"
    >
      <div class="w-16 h-16 rounded-full bg-gray-300 mr-3 overflow-hidden">
        <img class="w-full h-full" :src="avatar" alt="client avatar" />
      </div>
      <div class="text-left">
        <div class="star flex mb-2">
          <!-- <StarIcon
            v-for="star in stars"
            class="w-5 h-5 text-orange-400 mr-1"
            :key="star"
          /> -->
        </div>
        <h1 class="text-xl font-black truncate xl:max-w-[70%]">
          {{ clientName }}
        </h1>
        <h4 class="font-light text-sm">{{ position }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Co-Carousel",
  props: ["clientName", "position", "numberOfStar", "content", "avatar"],
  components: {},

  computed: {
    stars() {
      let list = [];
      for (let i = 0; i < this.numberOfStar; i++) {
        list.push(i + 1);
      }
      return list;
    },
  },
};
</script>
<style lang="scss">
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
