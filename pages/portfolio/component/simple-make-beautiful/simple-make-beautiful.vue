<template>
  <div
    class="custom-container lg:grid lg:grid-cols-12 pb-[40px] overflow-hidden"
  >
    <div class="lg:col-start-2 lg:col-end-12 grid grid-cols-12 my-20">
      <div
        class="title col-start-2 col-span-10 lg:col-start-1 lg:col-span-5 lg:text-6xl text-3xl text-darkLavender lg:text-left font-bold grid my-5 font-primary"
      >
        {{ $t("portfolio.title.title1") }}
      </div>
      <div
        class="col-start-2 col-span-10 lg:col-start-1 lg:col-span-5 text-xl my-5"
      >
        <p class="text-left">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p class="text-left">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>

      <div
        class="col-start-2 col-span-10 row-start-3 my-20 lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:row-span-3 lg:mx-20 xl:mx-28 2xl:mx-20"
      >
        <div class="flex relative items-center justify-center">
          <img
            :src="imgLeft"
            alt="Image"
            class="relative mr-10 rounded-lg img-side"
          />
          <img
            :src="imgMiddle"
            alt="Image"
            class="absolute z-40 rounded-lg img-mid"
          />
          <img
            :src="imgRight"
            alt="Image"
            class="relative ml-10 rounded-lg img-side"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLeft:
        "https://cdn.dribbble.com/users/1051363/screenshots/16444517/media/55fde2fecf77059b1cab1858fff4d811.png?compress=1&resize=1200x900&vertical=top",
      imgMiddle:
        "https://cdn.dribbble.com/users/1015117/screenshots/18003992/media/372689fd697dae8340d8f29d42c30bb0.png?compress=1&resize=1200x900&vertical=top",
      imgRight:
        "https://cdn.dribbble.com/users/5182041/screenshots/11444690/media/434ef0e06c3a63c7b1aa30fc861894d7.png?compress=1&resize=1200x900&vertical=top",
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 54px;
}
.img-side {
  width: 307px;
  height: 425px;
  object-fit: cover;
}
.img-mid {
  width: 410px;
  height: 543px;
  object-fit: cover;
}
</style>
