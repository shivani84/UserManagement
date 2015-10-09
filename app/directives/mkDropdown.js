/**
 * Created by shivani on 8/6/15.
 */
(function (){
   var dropDown = function($compile) {
       // Return the directive configuration.
       // --
       // NOTE: ngModel compiles at priority 1, so we will compile at priority 2.
       return ({
           compile: compile,
           priority: 2,
           restrict: "A",
           terminal: true
       });
   }
}())