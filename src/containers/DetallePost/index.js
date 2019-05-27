import React from 'react';
import CardDetail from '../../components/CardDetail';
import JPApiServices from './../../services/JsonPlaceholderApiServices'; //Hacemos uso de la instancia de PokemonService

class DetallePost extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      post: {},
    }
  }

  async componentDidMount(){

    const { match } = this.props; //Match nos trae datos importantens, en este caso todos los queryParams
    const { params } = match; //Podemos usar destructuring hasta obtener los params.
    const { idPost } = params;

    if (idPost.length > 0) { //Si tengo un Id, entonces ejecutar. Podria ser 0 el id por lo que no puedo poner un !idPokemon
		JPApiServices.getPostById(idPost)
      .then( //Ejemplo Con promesas
        post => {
          this.setState({
            post,
          });
        }
      ).catch(
        error => console.log("Ocurrió un error",error)
      );
      
    }

  }

  render(){
    const { post } = this.state;
    return(
      <div className="">
        {
          !post 
          ? <h2> No hay posts cargardos aún</h2>
          : <CardDetail {...post} />
        }
      
      </div>
    );
  }
}

export default DetallePost;