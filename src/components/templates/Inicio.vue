<template>
  <div>
    <Top />

    <div class="container text-center mt-4 mb-5 corpo">
      <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
          <h1 class="display-4 title">Associação de profissionais da</h1>
          <h1 class="display-4 title">Engenharia Química do Espírito Santo</h1>
        </div>
      </div>
      <br />

      <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
          <div class="container carousel-size">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../../assets/bannergray.png" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src="../../assets/bannergray.png" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src="../../assets/bannergray.png" class="d-block w-100" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
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
  name: "inicio",
  components: {
    Top,
    Down,
  },
};
</script>


<style>
.carousel-size {
  width: 90%;
}


.corpo {
  width:  100%;
}


.title {
  font-size: 3vw;
}

@media (max-width: 1200px) {
  .title {
    font-size: calc(1.525rem + 1vw);
  }
}
</style>