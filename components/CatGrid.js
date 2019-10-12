import CatItem from './CatItem'
export default class CatGrid extends React.Component {

	render() {
		const {cats, loadMore} = this.props
		// <div className="gallery">
		return <React.Fragment>
			<div className="row gallery mb-3">
				{ cats.map((cat) => (
		          <CatItem key={cat.id} cat={cat} />
		        )) }
			</div>
			<button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={ (event) => loadMore(event) }>Load More</button>
			<style jsx>{`
				.gallery {
					-webkit-column-count: 2;
					-moz-column-count: 2;
					column-count: 2;
					-webkit-column-width: 50%;
					-moz-column-width: 50%;
					column-width: 50%;
					margin: 2em 0em;
				}
				@media (max-width: 576px) {
					.gallery {
						-webkit-column-count: 1;
						-moz-column-count: 1;
						column-count: 1;
						-webkit-column-width: 100%;
						-moz-column-width: 100%;
						column-width: 100%;
					}
				}
			`}</style>
		</React.Fragment>
	}
}
