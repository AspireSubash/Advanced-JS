// \d is a intger in a character string
//D is the inverse of captial d
// Flag	Description	Corresponding property
// d	Generate indices for substring matches.	hasIndices
// g	Global search.	global
// i	Case-insensitive search.	ignoreCase
// m	Allows ^ and $ to match next to newline characters.	multiline
// s	Allows . to match newline characters.	dotAll
// u	"Unicode"; treat a pattern as a sequence of Unicode code points.	unicode
// v	An upgrade to the u mode with more Unicode features.	unicodeSets
// y	Perform a "sticky" search that matches starting at the current position in the target string.	sticky
var regex = /\sphone/;
var str1 = 'Users       phone number is 987a65#$%^&*32187653';
var output = regex.exec(str1);
console.log(output);
