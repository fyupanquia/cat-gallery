import Header from './partials/Header';
import Head from 'next/head'
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bootstrap.4.3.min.css';
import '../assets/css/bootstrap.cover.4.3.min.css';


export default class Layout extends React.Component {
	render() {
		const { children, title } = this.props;

		return <React.Fragment>
			<Head>
				<title>{ title }</title>
			</Head>
			<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
			  <header className='masthead mb-auto'>
			    <div className='inner'>
			      <h3 className='masthead-brand'>CatAlbum</h3>
			      <nav className='nav nav-masthead justify-content-center'>
			        <a className='nav-link active' href='#'>Home</a>
			        <a className='nav-link' href='#'>Features</a>
			        <a className='nav-link' href='#'>Contact</a>
			      </nav>
			    </div>
			  </header>

			  <main role='main' className='inner cover mb-5'>
			    { children }
			  </main>

			  <footer className='mastfoot mt-auto'>
			    <div className='inner'>
			      <p>Developed by <a href='https://github.com/fyupanquia'>fyupanquia</a>.</p>
			    </div>
			  </footer>
			</div>
			<style jsx global>{`
				body {
					text-align: center!important;
				}
				#__next{
					width:100%;
				}
			`}</style>
		</React.Fragment>
	}
}