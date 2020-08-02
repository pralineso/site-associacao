<template>
    <div class="container-fluid-fixed-bottom bg-light pt-4 mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-2 col-sm-6">
            <blockquote class="blockquote text-center"><p class="ml-0">APEQ-ES</p></blockquote>
          </div>
          <div class="col-md-8 col-sm-9">
            <ul class="list-inline text-center">
              <li class="list-inline-item pr-3">
                <a href="#">
                  <router-link class="footer-color" to="home">Inicio</router-link>
                </a>
              </li>

              <li class="list-inline-item pr-3">
                <a href="#">
                  <router-link class="footer-color" to="sobre">Sobre</router-link>
                </a>
              </li>

              <li class="list-inline-item pr-3">
                <a class href="#">
                  <router-link class="footer-color" to="contato">Contato</router-link>
                </a>
              </li>

              <li class="list-inline-item ">
                <a class href="#">
                  <router-link class="footer-color" to="associese">Associe-se</router-link>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-6">
            <ul class="list-inline text-center">
              <li class="list-inline-item pr-3">
                <a class="footer-color" href="https://www.facebook.com/apeq.es">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li class="list-inline-item pr-3">
                <a class="footer-color" href="https://www.linkedin.com/in/apeq-es">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="footer-color" href="https://www.instagram.com/apeq.es/">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3 mb-0 pb-0">
        © 2020 Copyright:
        <a href="#" class="footer-color">APEQ-ES</a>
      </div>
    </div>

</template>

<script>
export default {
  name: "Down",
};
</script>

<style scoped>
.footer-color {
  color: gray;
}

</style>