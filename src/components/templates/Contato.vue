<template>
  <div>
    <Top />

    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-md-10 align-self-center">
          <h2>Contato</h2>
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-md-6 col-sm-12 text-center">
          <!--  <div class="bg-light mr-3"> -->
          <h3>Telefones</h3>
          <div class="mt-5 mb-5">
            <p>
              <a class="color-style" href="tel:(99) 9999-9999">Telefone 1: (27) 9999-9999</a>
            </p>
            <p>
              <a class="color-style" href="tel:(99) 9999-9999">Telefone 2: (27) 8888-8888</a>
            </p>
          </div>
          <!--  </div> -->
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <!--  <div class="bg-light "> -->
          <h3>Email</h3>
          <div class="mt-5 mb-5">
            <p>
              <a class="color-style" href="mailto: sapeq@email.com">Email: apeq@email.com</a>
            </p>
          </div>
        </div>
        <!--  </div> -->
      </div>

      <div class="row justify-content-center pt-5">
        <div class="col-md-10 align-self-center">
          <h3 class="pl-3">Redes Sociais</h3>
          <div class="row justify-content-center text-center pt-5">
            <div class="col-md-2 pb-auto">
              <a class="color-style" href="#">Facebook</a>
            </div>
            <div class="col-md-2 pb-auto">
              <a class="color-style" href="#">Intagram</a>
            </div>
            <div class="col-md-2 pb-auto">
              <a class="color-style" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center pt-5">
        <div class="col-md-10 align-self-center">
          <h3 class="pl-3">Fale Conosco </h3>
          <form>
            <div class="form-row justify-content-center pt-5">
              <div class="col-md-8">
              <!--   <div class="input-group input-group-lg"> -->
                  <input type="text" class="form-control" placeholder="Nome:" />
              <!--   </div> -->
              </div>
            </div>
            <div class="form-row justify-content-center pt-4">
              <div class="col-md-8">
              <!--  <div class="input-group input-group-lg"> -->
                  <input type="text" class="form-control" placeholder="Email:" />
              <!--  </div> -->
              </div>
            </div>
            <div class="form-row justify-content-center pt-4">
              <div class="col-md-8">
              <!--  <div class="input-group input-group-lg"> -->
                  <textarea class="form-control" placeholder="Mensagem:" rows="5"></textarea>
              <!--  </div> -->
              </div>
            </div>

            <div class="row justify-content-md-center pt-4">
              <div class="col-md-4">
                <button type="button" class="btn btn-info estilo rounded-pill">Enviar</button>
              </div>
            </div>
          </form>
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
  name: "Contato",
  components: {
    Top,
    Down,
  },
};
</script>

<style>
.estilo{
  width: 100%;
}
.color-style {
  color: gray;
}
</style>