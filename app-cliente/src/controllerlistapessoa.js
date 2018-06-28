module.exports = function(pessoaservice){
    this.listar = () => pessoaservice.buscapessoa().then( (ret) => {
      this.pessoas = ret.data;
    });
    // carregar a lista imediatamente após carregar o controlador
    this.listar();
  }