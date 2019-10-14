import Layout from '../components/Layout'
import cat from '../plugins/cat'

export default class extends React.Component {
	static async getInitialProps({ query }) {
		const { id } = query
		
		try {
			const rsp = await cat
			.findById({id})
			.then(cat => {
				return cat
			})
			return { cat:rsp }
		} catch (e) {
			return { cat:{id} }
		}
	}
	render() {
		const { cat } = this.props
		return <Layout  title={"Cat - "+cat.id}>
			<h1>xddd</h1>
		</Layout>
	}
}