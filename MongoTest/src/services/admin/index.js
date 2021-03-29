const list = require("./list");
const save = require("./save") ;
const {get,update} = require("./profile");
const search = require("./search");
const deactivate = require("./deactivate") ;

module.exports={    
  list: list,
  save: save,
  get: get,
  update: update,
  search: search,
  deactivate: deactivate
}