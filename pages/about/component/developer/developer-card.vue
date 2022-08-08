<template>
  <div
    class="developer-card text-white text-left p-8 relative sm:w-[85%] ssm:w-[100%] lg:w-[80%] rounded-xl w-full sm:pr-16 ssm:mt-6 bg-primary min-h-[350px]"
  >
    <h3
      class="developer-card__name mb-2 text-xl lg:text-2xl font-bold uppercase"
    >
      {{ fullName }}
    </h3>
    <p class="developer-card__job mb-2 text-base lg:text-xl italic">
      {{ jobPositions[0].jobPosition.name }}
    </p>
    <span class="developer-card__line block w-[50%] mb-4"></span>
    <p class="developer-card__desc mb-6 text-base lg:text-xl">
      {{ desc }}
    </p>
    <button
      class="developer-card__btn absolute bottom-[15px] right-[30px] w-full sm:pr-4 font-bold uppercase flex align-center justify-end text-base lg:text-xl cursor-pointer"
    >
      Show more
      <!-- <ArrowNarrowRightIcon class="ml-2 inline-block h-6 w-6 text-grey-600" /> -->
    </button>
    <img
      class="developer-card__avatar rounded-full sm:w-[150px] sm:h-[150px] absolute right-[-85px] bottom-[20px] ssm:right-[10px] ssm:top-[20px] z-10 ssm:w-[100px] ssm:h-[100px]"
      :src="avatar"
      alt="avatar"
    />
  </div>
</template>

<script>
export default {
  name: "DeveloperCard",
  props: ["fullName", "jobs", "desc", "avatar"],
  components: {},
  data() {
    return {};
  },
  computed: {
    jobPositions() {
      return this.jobs.filter((job) => job.mainPosition === true);
    },
  },
};
</script>

<style scoped lang="scss">
.developer-card {
  .developer-card__line {
    border-bottom: 1px solid white;
  }
}
</style>
