const {fetchDetails,updateDetails} = require("./details"); 
const{setVacations,fetchVacations,deleteVacation} = require("./vacations");

module.exports = {
  fetchDetails: fetchDetails,
  updateDetails: updateDetails,
  setVacations: setVacations,
  fetchVacations: fetchVacations,
  deleteVacation: deleteVacation
};