module.exports = function ($http){

    this.buscapessoa = () => $http.get("http://127.0.0.1:3000/list");
  
    this.salvapessoa = (ev) => $http.post("http://127.0.0.1:3000/save",ev);
  
  }