import Link from 'next/link'

export default class CatItem extends React.Component {
	randomColor() {
		return [
			"text-white bg-primary",
			"text-white bg-secondary",
			"text-white bg-success",
			"text-white bg-danger",
			"text-white bg-warning",
			"text-white bg-info",
			"text-dark bg-light",
			"text-white bg-dark"
		].sort(()=> Math.random() -0.5).pop();
	}
    render() {
   		const { cat } = this.props;
   		cat.classColor =  typeof cat.classColor === "undefined" ? this.randomColor() : cat.classColor
   		//  <div className='mb-3'>
	 	return <div className='col-12 col-sm-6'>
	 		<Link href={"/cat?id="+cat.id}>
			  <a>
			  	<div className={`card ${cat.classColor} mb-3`}>
				  <div className='card-header'>{ cat.id }</div>
				  <div className='card-body'>
				    <img src={cat.url} className='mw-100'/>
				  </div>
	            </div>
			  </a>
			</Link>
		</div>
   }	
}