const routes = require('next-routes')

                                                    
module.exports = routes()                           
.add('/','index')                                      
.add('contact', 'contact', 'contact')
.add('cat', '/cat/:id', 'cat')