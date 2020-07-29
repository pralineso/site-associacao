<template>
  <div class="container pt-5">
    <h2>Contato</h2>

    <div class="row">
      <div class="col md-6 text-center">
        <h4>Telefones</h4>
        <div class="mt-5">
          <p>
            <a href="tel:(99) 9999-9999">Telefone 1: (27) 9999-9999</a>
          </p>
          <p>
            <a href="tel:(99) 9999-9999">Telefone 2: (27) 8888-8888</a>
          </p>
        </div>
      </div>
      <div class="col md-6 text-center">
        <h4>Email</h4>
        <div class="mt-5">
          <p>
            <a href="mailto: sapeq@email.com">Email: apeq@email.com</a>
          </p>
        </div>
      </div>
    </div>

    <div class="container pt-5">
      <h4 class="pl-3">Redes Sociais</h4>
      <div class="row justify-content-center text-center pt-5">
            <div class="col-2">
                <a href="#">Facebook</a>
            </div>
            <div class="col-2">
                <a href="#">Intagram</a>
            </div>
            <div class="col-2">
                <a href="#">LinkedIn</a>
            </div>
      </div>
    </div>

    <div class="container pt-5 pb-5">
      <h4 class="pl-3">Fale Conosco 2</h4>
      <form>
        <div class="form-row justify-content-center pt-5">
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Nome:" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Email:" />
          </div>
        </div>
        <div class="form-row justify-content-center pt-4">
          <div class="col-md-8">
            <textarea class="form-control" rows="5">Mensagem:</textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contato"
};
</script>