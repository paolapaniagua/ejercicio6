import React, { Component } from 'react';
import Card from '../../components/Card';
import jpinstance from './../../services/JsonPlaceholderApiServices';

class Post extends Component {

	constructor(props) {
        super(props);
        
		this.state = {
            data: [],
        };
	}
	
    async componentDidMount() {

        jpinstance.getAllPost()
        .then(
            newList => this.setState({
            data:newList,
          })
        )
        .catch(
          err => console.log("Ocurrió un error",err)
        )
        
}

	render() {
		const { data } = this.state;                            
        
        return (
            <div className="">
            
                <div>
                {
                   data.map( (item, index) => <Card key={item.id} {...item}/>)
                }
                </div>
            </div>
            /*
			<div className="">
			{
				 <TablaDetalles data={this.state.data} />
				}
				
            </div>
            */
		)
	}
}

export default Post;