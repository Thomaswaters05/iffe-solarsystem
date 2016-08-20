var SolarSystem = (function(){
  var planets = ["Mercury", "Venus", "Earth", "Jupiter", "Uranus", "Saturn", "Neptune"];
  var activeSpacecraft = ["Voyager I"];
  var planetsLandedOn = 0;

return {
     spaceDate: new Date(),
     getPlanets: function(){
     return planets
     },
     setPlanets: function(newPlanets){
      planets.push(newPlanet);

     },
     getActiveSpacecraft: function(){
      return activeSpacecraft;

     },
     setActiveSpacecraft: function(newSpacecraft){
      activeSpacecraft.push(newSpacecraft);

     },
     getplanetsLandedOn: function(){
        return planetsLandedOn;
     },
     setplanetsLandedOn: function(numLanded){
      planetsLandedOn = numLanded;
     }
    }
})();