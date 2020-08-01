<template>
  <div  class="navbar-fixed-bottom pt-5">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container pt-5">
        <a class="navbar-brand" href="#">APEQ-ES</a>
          <ul class="nav navbar-nav navbar-center">
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  class="footer-color" to="home">Inicio</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  class="footer-color" to="sobre">Sobre</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link  class="footer-color" to="contato">Contato</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link class="footer-color" to="associese">Associe-se</router-link></a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
              <a class="nav-link" href="https://www.facebook.com/apeq.es">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/apeq-es">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/apeq.es/">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            </li>
          </ul>
            
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Down'
};
</script>

<style scoped>
.footer-color{
  color: gray;
}
</style>