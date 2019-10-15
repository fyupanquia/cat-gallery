import Head from 'next/head'
import Error from './_error'
import Layout from '../components/Layout'
import CatGrid from '../components/CatGrid'
import Loading from '../components/Loading'
import cat from '../plugins/cat'

export default class extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {page:0,cats:[],limit:10}
	}
	componentDidMount() {
		this.loadMore()
	}

	loadMore = (event) => {
		let {limit,page,cats} = this.state;
		page++;
		this.setState({
			page
		})
		cat
			.search({limit,page})
			.then(_cats => {
				cats = cats.concat(_cats)
				this.setState({
					cats
				})
				console.log(this.state)
			})
			.catch(rsp => {
				this.setState({
					cats: null
				})
			})
	}

	showCats = () => {
		console.log(this.state.cats)
	}

	render() {
		//const {cats, statusCode} = this.props
		const { cats } = this.state

		if (cats === null) {
		    return <Error statusCode="500"></Error>
		}

		return <Layout title="HOME" selected_id="home">
		{
			!cats.length ?
			<Loading/> :
			<CatGrid cats={cats} loadMore={this.loadMore}/>
		}
		</Layout>
	}
}
// 