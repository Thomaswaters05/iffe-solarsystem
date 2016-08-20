//1. getter/setter for closest start to the sun
//2. getter/setter for age of solar system
//3. getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem){
  var closestStars = ["Aplha Centauri"];
  var ageOfSolarSystem = 0;
  var dwarfPlanets = ["Pluto"];

    newSolarSystem.getclosestStars = function(){
        return closestStars
    };
    newSolarSystem.setclosestStars = function(closestars) {
        closestStars.push(closestars);
    };
    newSolarSystem.getageOfSolarSystem = function() {
        return ageOfSolarSystem;
    };
    newSolarSystem.setageOfSolarSystem = function(ageOf) {
        ageOfSolarSystem = ageOf;
    };
    newSolarSystem.getdwarfPlanets = function() {
        return dwarfPlanets;
    };
    newSolarSystem.setdwarfPlanets = function(dwarfs) {
        dwarfPlanets.push(dwarfs);
    };
    return newSolarSystem;
})(SolarSystem || {});