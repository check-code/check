var grievancesystem= angular.module('grievancesystem');
 grievancesystem.controller('gridCtrl', gridCtrl);
 
function gridCtrl() {
    this.hideGrid=false;
  this.myData = [
    {
        firstName: "Cox",
        lastName: "Carney",
        company: "Enormo",
        employed: true
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Nancy",
        lastName: "Waters",
        company: "Fuelton",
        employed: false
    }
  ];
}