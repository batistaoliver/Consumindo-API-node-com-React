import React, { Component } from "react";
import api from "../../services/api";
import './styles.css'
import {Link} from 'react-router-dom'

	export default class Main extends Component {
		state = {
			products: [],
			productInfo: {},
			page:1,
		};

		componentDidMount(){
			this.loadProducts();
		}

		loadProducts = async (page =1) =>{
			const response = await api.get(`/products?page=${page}`);
			const {docs, ... productInfo} = response.data;
			console.log(response.data.docs);
			this.setState({ products: docs,productInfo,page});
		};
		
		prevPage = () =>{
			const {page, productInfo} = this.state;
			
			if (page==1) return;
			 const pageNumber = page-1;
			 this.loadProducts(pageNumber);
			  
		}
		nextPage = () =>{
			const {page, productInfo}=this.state;
			 
			if (page == productInfo.pages) return; //pages me diz a última página
			const pageNumber = page +1;
			this.loadProducts(pageNumber);
			 
		}
		
		render(){
			const {products,page,productInfo} = this.state
			console.log(page)
			return (
			<div className="product-list">
				{products.map(product => (
					<article key={product._id}>
						<strong>{product.title}</strong>
						<p>{product.description}</p>
			
						<Link to={`/products/${product._id}`}>Acessar</Link>
					</article> 
				))}
				<div className="actions">
					
					<button disabled={page ==1} onClick={this.prevPage}>Anterior</button>
					<button disabled={page ==productInfo.pages} onClick={this.nextPage}>Próximo</button>
				</div>
			</div>
			
			);
		}
    }
	
	
//PARA CONSUMIR A API https://api.tvmaze.com/search/shows?q=

// 	import React, { Component } from "react";
// import api from "../../services/api";

// 	export default class Main extends Component {
// 		state = {
// 			filmes: [],
// 		  }

// 		componentDidMount(){
// 			this.loadProducts();
// 		}

// 		loadProducts = async () =>{
// 			const response = await api.get('star%20wars');
// 			this.setState({ filmes: response.data });
// 			console.log(response.data);
// 		};
		
// 		render(){
// 			const { filmes } = this.state;
// 			return (
// 				<div>
// 				  <h1>Listar os Filmes</h1>
// 				  {filmes.map(filme => (
// 					<li key={filme.show.id}>
// 					  <h2>
// 						<strong>Título: </strong>
// 						{filme.show.name}
// 					  </h2>
// 					  <p>
// 						{filme.show.url}
// 					  </p>
		  
// 					</li>
// 				  ))}
// 				</div>
// 			  );
// 		}
//     }
	