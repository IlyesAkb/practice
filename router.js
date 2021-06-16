class Router {
  routes = [];
  // post, put, delete
  
  get(route, callback) {
    this.routes.push({ route, callback });
  }
  
  __handle(req, res) {
    console.log('routes: ', this.routes)
    const route = this.routes.find(
      (r) => {
        return r.route === req.url;
      },
    );
    
    
    if (!route) {
      res.writeHead(404);
      return res.end('not found');
    }
    
    route.callback(req, res);
  }
}

module.exports = Router;
