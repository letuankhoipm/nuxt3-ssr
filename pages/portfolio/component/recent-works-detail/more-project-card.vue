<template>
  <div
    class="project-card w-full h-full relative"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="info absolute left-[-20px] bottom-[10px] w-[80%] pl-10 py-2">
      <h2 class="title-card font-bold text-left text-xl text-white truncate">
        {{ name }}
      </h2>
      <p class="desc-card text-left text-sm text-white truncate">
        {{ description }}
      </p>
    </div>
    <NuxtLink :to="'/portfolio/detail/' + id">
      <!-- <ArrowNarrowRightIcon
        class="btn-right h-[64px] text-white text-5xl absolute right-[10px] bottom-[10px] w-[20%] px-4 py-2"
    /> -->
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "MoreProjectCard",
  props: ["id", "image", "name", "description"],
};
</script>
<style lang="scss" scoped>
.project-card {
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  .info,
  .btn-right {
    background: rgba($color: #000000, $alpha: 0.2);
    border-radius: 1rem;
  }
  .btn-right:hover {
    color: #000000 !important;
  }
}
</style>
