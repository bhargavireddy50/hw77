$.validator.addMethod( "greaterThan", function( value, element, param ) {
  var target = $( param );

  if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
      target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
          $( element ).valid();
      } );
  }
  return Number(value) >= Number(target.val());

});

/* The following functions checks if the user has input any decimals */
$.validator.addMethod("noDecimal", function(value, element) {
    return !(value % 1);
}, "Please enter an integer.");

/* These indicate all the rules for the values entered by the user  */
jQuery.validator.addClassRules("InputtheNum", {
    required: true,
    number: true
});

$(function() {
  $("#input").validate({
    rules: {
      /*Tthis function creates rules*/
      h1: {noDecimal: [h1, h1]},
      v1: {noDecimal: [v1, v1]},
      h2: {
        noDecimal: [h2, h2],
        greaterThan: [h1, h1]
      },
      v2: {
        noDecimal: [v2, v2],
        greaterThan: [v1, v1]
      }
    },

    /*This is used to display an error message or usesjquery plugin as error message*/
    messages: {
      h1: {required: "Insert horizontal 1st value"},
      v1: {required:"  Insert vertical 1st value"},
      h2: {
        required: "  Insert horizontal 2nd value",
        greaterThan: "Please enter a larger number"
      },
      v2: {
        required: "Insert vertical 2nd value",
        greaterThan: "Please enter a larger number"
      }
    },

    // Generated the table if the rules are folloed by the user
    submitHandler: function(form){
      create_Table();
    }
  });
});

/*This functions convert to a number and generates the multiplicator */
function create_Table() {
var column1 = Number(document.getElementById("h1").value);
var column2 = Number(document.getElementById("h2").value);
var row1 = Number(document.getElementById("v1").value);
var row2 = Number(document.getElementById("v2").value);

//The function checks if the row one has the bigger number and if row 2 has the smaller number and and column one has a bigger number andcolumn two has the smaller number.
//This will create the table for the user and adds the columns and row headers and displayes results
   var result="<tr><th> </th>";
 for(var m = column1; m <= column2; m++){
 result += "<th>" + m + "</th>";
}
 result += "</tr>";
for(var n = row1; n <= row2; n++) {
 result += "<tr><th>" + n + "</th>";
 for(var p = column1; p <= column2; p++) {
 result += "<td>" + n*p + "</td>";
 }
     result += "</tr>";
   }
      //This gives us the results in the end
    var table = document.getElementById("my_Table").innerHTML = result;

  }
