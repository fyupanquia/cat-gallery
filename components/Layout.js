import Header from './partials/Header';
import Link from 'next/link'
import Head from 'next/head'
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bootstrap.4.3.min.css';
import '../assets/css/bootstrap.cover.4.3.min.css';


export default class Layout extends React.Component {

	constructor(props) {
		super(props)
		const selected_id = props.selected_id ? props.selected_id : null;
		let menus = [{id:"home",label:"Home",url:"/"},{id:"contact", label:"Contact", url:"/contact"}].map(m => {
			m.selected = m.id == selected_id
			return m
		});
		this.state = { menus }
	}

	render() {
		const { children, title } = this.props;

		//active
		return <React.Fragment>
			<Head>
				<title>{ title }</title>
			</Head>
			<div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
			  <header className='masthead mb-auto'>
			    <div className='inner'>
			      <Link href="/"><a><h3 className='masthead-brand'>CatGallery</h3></a></Link>
			      <nav className='nav nav-masthead justify-content-center'>
			      	{ this.state.menus.map(menu => {
							return <Link key={menu.id} href={menu.url} ><a className={`nav-link `+ (menu.selected ? 'active' : '') } >{ menu.label }</a></Link>
			      		})
			      	}
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