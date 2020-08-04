<template>
  <div>
    <Top />

    <div class="container pt-5">
      <div class="row justify-content-center pt-5">
        <div class="col-md-10 align-self-center">
          <h2>Associe-se</h2>
        </div>
      </div>

      <div class="row justify-content-center pt-5">
        <div class="col-md-10 align-self-center">
          <h3>Mais informações</h3>
          <blockquote class="blockquote pt-5">
            <p
              class="text-justify"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius mauris vitae lorem porta, quis malesuada mi scelerisque. Nulla eu turpis id ante cursus vestibulum et sit amet nisi. Morbi ullamcorper faucibus lacus non porta. Sed sed tellus libero. Aenean lobortis eget leo ac rhoncus. Etiam scelerisque elit magna, vel ornare metus ullamcorper quis. Curabitur vel bibendum justo. Praesent interdum ex nec nisi condimentum consectetur. Pellentesque in magna odio.</p>
            <p
              class="text-justify"
            >Quisque eget sem libero. Aliquam erat volutpat. Cras eget lobortis ante, quis efficitur enim. Curabitur non elit at nisl maximus hendrerit. Aenean ac est congue massa dignissim eleifend. Morbi dictum elit sit amet imperdiet ullamcorper. Duis neque leo, euismod non mi vitae, rutrum aliquam magna. Donec in tempus nisl. Morbi sodales quam sit amet orci vestibulum, nec dictum ex semper. Etiam volutpat velit arcu, ac molestie est finibus ac. Quisque tincidunt porttitor scelerisque. Sed lobortis pellentesque lectus id mattis.</p>
          </blockquote>
        </div>
      </div>

      <div class="row justify-content-md-center pt-4">
        <div class="col-md-4">
          <button type="button" class="btn btn-info estilo rounded-pill btn-lg">Seja um associado !</button>
        </div>
      </div>
    </div>

    <Down />
  </div>
</template>

<script>
import Top from "../Top.vue";
import Down from "../Down.vue";

export default {
  name: "Associese",
  components: {
    Top,
    Down,
  },
};
</script>
