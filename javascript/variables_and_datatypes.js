//Javascript variables

// using let
let a = 5;
console.log(a);
a=10
console.log(a);

// using const
const b = 6;
console.log(b);

// using var
var $c = 7;
var $c = 18;
console.log($c)
/**
 * accepted variables names
 * 1. variables that starts with letters
 * 2. variables that start with _
 * 3. variables that starts with $
 */
/**
 * unaccepted variables names
 * 1. variables that with spaces between them
 * 2. variables with - between them
 * 3. variables that starts with numbers ad special characters aside what was stated above
 */

// accepted variables Names
let d;
let _;
let $;
let $name
let first_name;
let _name;

/** Javascript data types
 * (null,
 * undefined,
 * strings,
 * boolean,
 * numbers,
 * arrays,
 * objects,
 * etc)
 *
*/

// null
let myUnknown = null;
console.log(myUnknown)

// undefined
let unAssigned = undefined

// Strings
const firstName = "Ebedamowei";
const lastName = "Edih";
const ageString = "50"

// numbers
const x = 10;
const y = 15;
const z = 23

// boolean
const isClassOver = false;
const loading = true;

// arrays
const MyNames = ["Goodluck", "Ebedamowei","Edih"]
const randomValues = [1,false,"Hello",null,"John"]
const comboList = [MyNames,randomValues]
console.log(comboList)
// objects
const account = {
    firstName:"Goodluck",
    lastName:"Edih"
}
