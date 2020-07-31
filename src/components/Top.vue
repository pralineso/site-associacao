<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">APEQ-ES</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  to="home">Inicio</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  to="sobre">Sobre</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  to="contato">Contato</router-link></a>
            </li>
          </ul>
          <button class="btn btn-info rounded-pill my-2 my-sm-0" type="submit"><router-link class="header-options" to="home">Associe-se</router-link></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'top'
};
</script>

