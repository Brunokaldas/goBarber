import  { Router } from require('express');
const routes = new Router();

routes.get('/', (req, res)=>{
  return res.json({message:'Hello world'});
});

export default routes;