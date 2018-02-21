function exibirFilmes(){
	axios.get('https://ghibliapi.herokuapp.com/films')
	.then(function (response) {
    console.log(response);
    var filmes = response.data;
    var mostrarFilmes = '';

    for(var i = 0; i < filmes.length; i++){
    	mostrarFilmes += `
    		<div class="col-lg-12">
    			<div class="well clearfix">
                    <h4>${filmes[i].title}</h4>
                    <ul class="atributos">
                        <li class="atributos-item"><strong>Diretor: </strong>${filmes[i].director}</li>
                        <li class="atributos-item"><strong>Lançamento: </strong>${filmes[i].release_date}</li>
                        <li class="atributos-item"><strong>Descrição: </strong>${filmes[i].description}</li>
                    </ul>                      				
    			</div>
    		</div>
    	`;
    }
    document.getElementById('filmes').innerHTML = mostrarFilmes;
  })
  .catch(function (error) {
    console.log(error);
  });
}