import Head from 'next/head'
import Error from './_error'
import Layout from '../components/Layout'
import CatGrid from '../components/CatGrid'
import Loding from '../components/Loding'
import cat from '../plugins/cat'

export default class extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {page:0,cats:[],limit:10}
	}
	/*
	static async getInitialProps({ res }) {
		try {
			let {limit,page,cats} = {page:1,cats:[],limit:10}
			const newcats = await cat
						.search({limit,page})
						.then(cats => {
							return cats
						})
			cats = cats.concat(newcats)
			
			//this.state = {limit,page,cats}
			_this().setState({
				limit,
				page,
				cats
			})
			res.statusCod = 200
			return {cats, statusCode:200}
		} catch (e) {
			console.log(e)
			res.statusCod = 503
			return { cats:[], statusCode:503 }
		}
	}
	*/
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

		return <Layout title="Home">
		{
			!cats.length ?
			<Loding/> :
			<CatGrid cats={cats} loadMore={this.loadMore}/>
		}
		</Layout>
	}
}
// 