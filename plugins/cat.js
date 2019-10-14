import catAPI from './catAPI'
const catService = {}
catService.search = function (q) {
	return catAPI
		.get('/images/search', { params: { limit: q.limit} })
		.then(rsp => rsp.data)
}
catService.findById = function (q) {
	return catAPI
		.get(`/images/${q.id}`, { params: {} })
		.then(rsp =>  rsp.data)
}
export default catService
