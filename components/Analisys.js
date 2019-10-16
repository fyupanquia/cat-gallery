export default class Analisys extends React.Component{
	render() {
		const { data } = this.props
		
		return <React.Fragment>
			<table className="table table-striped table-dark mw-100">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Labels</th>
			      <th scope="col">Vendor</th>
			      <th scope="col">Created at</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		data.length ? data.map((row,i) => {
			  			return <tr key={i} >
						      <th scope="row">{ row.image_id }</th>
						      <td>{ row.labels.map(c => c.Name ).join(',') }</td>
						      <td>{ row.vendor }</td>
						      <td>{ row.created_at }</td>
						    </tr> 
			  		}) : <tr><td colSpan='4'>No analysis information was found for this little cat.</td></tr>
			  	}
			  </tbody>
			</table>
			<style jsx>{`
				table tr th:nth-child(2), table tr td:nth-child(2){
					width: 30%
				}
				table tr td:nth-child(2){
					word-break: break-word;
				}
			`}</style>
		</React.Fragment>
	}
}