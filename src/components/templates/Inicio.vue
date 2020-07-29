<template>
  <div class="container  text-center mt-4">
    <h1 class="display-4"><p>Associação de profissionais</p><p>  da Engenharia Química do Espírito Santo </p></h1>

    <br>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/1024/480/?image=10" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/1024/480/?image=12" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/1024/480/?image=22" class="d-block w-100" />
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
</template>

<script>
export default {
  name: "Inicio"
};
</script>
