import Layout from '../components/Layout'
import Link from 'next/link'

export default class extends React.Component {
	render() {
		return <Layout title="CONTACT" selected_id="contact">
			<div className="mt-5 mb-5">
				<div className="card">
				  <img src="/static/fyupanquia.jpg" className="card-img-top" alt="fyupanquia"/>
				  <div className="card-body">
				    <p className="card-text text-dark">
				    	A very cool full-stack web developer
				    </p>
				    <a target='_blank' href='https://www.facebook.com/fyupanquia0'><button type="button" className="btn btn-primary">Facebook</button></a>
				    <a target='_blank' href='https://twitter.com/fyupanquia'><button type="button" className="btn btn-info">Twitter</button></a>
				    <a target='_blank' href='https://www.youtube.com/channel/UCWAAUV5pt7h-tXimIXF_7KQ'><button type="button" className="btn btn-danger">YouTube</button></a>
				    <a target='_blank' href='https://github.com/fyupanquia'><button type="button" className="btn btn-dark">GitHub</button></a>
				  </div>
				</div>
			</div>
			<style jsx>{`
				ul {
					list-style:none;
				}
				button {
					margin-right:.5em;
				}
			`}</style>
		</Layout>
	}
}