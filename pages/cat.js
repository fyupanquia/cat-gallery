import Layout from '../components/Layout'
import cat from '../plugins/cat'
import Loading from '../components/Loading'
import Analisys from '../components/Analisys'

export default class extends React.Component {

	constructor(props) {
		super(props)
		this.state = {analysis:null}
	}
	static async getInitialProps({ query }) {
		const { id } = query
		
		try {
			const rsp = await cat
			.findById({id})
			.then(cat => {
				return cat
			})
			return { cat:rsp, statusCode: 200 }
		} catch (e) {
			return { cat:null, statusCode: 503 }
		}
	}
	async analysis(id) {
		this.setState({
			analysis : <Loading/>
		})
		const analisys = await cat
			.analysis({id})
			.then(cat => {
				return cat
			})

		this.setState({
			analysis : <Analisys data={analisys}/>
		})
		
	}
	render() {
		const { cat, statusCode } = this.props

		if (statusCode !== 200) {
		    return <Error statusCode={statusCode} ></Error>
		}

		const keys = Object.keys(cat)
		return <Layout  title={"CAT - "+cat.id}>
			{ !cat ?
				<Loading/> :
				<div className="pt-5 pb-5">
					<figure className="figure">
					  <img src={cat.url} className="figure-img img-fluid rounded" alt="..."/>
					  <figcaption className="figure-caption">
					  		<ul>
							   { Object.values(cat).map((value, index) => {

							   		if ( typeof value === "object" ) {
								   		value = Object.values(value).map(c => {return c.name;} ).join(',')
							   		}
							   		

							   		return <li key={index}><b>{ keys[index].toUpperCase() }: </b>{ value  }</li>
							   }) }
					  		</ul>
					  </figcaption>
					</figure>

					{
						!this.state.analysis ? <button type="button" className="btn btn-outline-warning btn-lg btn-block" onClick={ () => this.analysis.call(this,cat.id) }>Analitycs</button> : 
						this.state.analysis
					}
				</div>
			}
			<style jsx>{`
				ul {
					list-style: none;
				    text-align: left;
				    margin: 0;
				    padding: 0;
				}
			`}</style>
		</Layout>
	}
}