module.exports = function (pessoaservice) {

    this.novo = {};
    
    this.salvapessoa = () => {
        pessoaservice.salvapessoa(this.novo).then((ret) => {
            alert("pessoa salvo com id " + ret.data);
            window.location.href="#!/"
        });
    };
}