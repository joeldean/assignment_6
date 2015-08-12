/* JQUERY CHEAT SHEET


Jquery is a JavaScript Utility Library 

	In this case a 'Library' a collection of functions and code that someone has written
	to make a set of tasks easier in a specific programming language.

	If you include a library in your code, you have access to all the functions and moethods
	which means you can call them with out having to write out the entire function or method)

	Librarys are held in .js files 

	example: my_library.js

	Link to this library in the head of you html file and call functions later in the page 
	within <script></script> brackets.

Common Problems with Libraries

	Use the Javascript console (Open with 'Command + Option + J') to see if any errors are raised 
	when the page and library are loaded.

	Keep in mind that libraries can conflict with each other. You may have to edit or remove one
	library to make another library work.

	Call a function or Library in the console to see if the library is loaded.
	You can call jQuery to see if it is loaded.

	Keep in mind JQuery can make a page run slower.


Including the Jquery Library

	Include inside the head of your html file. */

	<script src="http://ajax.googleapis.com/ajax/libs.jquery/1.10.2/jquery.min.js">
	<script>

	/* In the above example the jquery library would load quickly because it is on a google server
	You could also download the library and save it within your own directory.

The Document Object Model (DOM)

	The DOM is a standard for interacting with and representing objects in HTML, XHTML, and XML

	Web Browser implement a standard version of it to normalize how HTML elements are interacted with

	JQuery makes it easier to select elements in the DOM, which include practically any html tag or element.

Selecting Elements with jQuery

	-jQuery can be used to select elements using a similar syntax to CSS

	-Try this first line in the Javascript console of a page that has jQuery included: */

	$("body")

	/*It should return  an Array with selected elements:

	>[><body>...</body>]

	The Format for selecting elements is: 

	$("<element name, class, id, or Xpath>")

	Examples:

	$("p")
	$(".main-nav")
	$("ul li")

	Calling $ is using a shorthand way of accessing the jQuery library's main function that all others are decended from.

	You can $ in the Javascript console to see that function.

	The ("element identifier") after $ is an argument being passed to the librarys main function.

Monitoring the DOM

	A key feature of JavaScript is being able to monitor for certain events being fired by specific DOM elements

	For instance, we could monitor a click event on <button> element to fire a specific snippet of code

The $(document) .ready() snippet

	This snippet ensures that you code doesnt run until you document fires a ready event

	The ready event fires when all the page's DOM elements are loaded, even if multimedia elements are fully loaded.

	By encapsulating all of our Jquery code to run when the document is read, the elemts youre selecting will definitly 
	be on the page when you acces them.

Anonymous Functions

	Anonymous functions are another wya to write functions that make them a "first class citizen" data type meaning that they can be:

		-Given as an argument to a function (Functions can take functions)

		-returned by a function or block of code

		-assigned to a variable

Writing Anonymous Functions */

	function(){
		alert ("I am anonymous!");
	}

	//anonymous functions can be stored in variables:

	var my_anon_function = function(){ alert("Har!");
	}

	//you can use these anonyomous functions in call backs

	function someRunner(anyFunction){ console.log(2+2); anyFunction(); }

	// below I call the function 'my_anon_function' by using it as the argument

	someRunner(my_anon_function);


/* Using $(document) .ready()

	To use $(document).ready() and ensure the page is ready for your jQuery, youll need to pass it 
	an anonymous function (a callback) to execute when the document is ready */

	$(document).ready(
		//Code that executes when the document is ready
	  function(){
	  	alert('Document is ready');
	  }
		);

/* The fun Stuff

If youre using jQuery in an actual file dont forget the $(document).ready() wrapper!

	Showing and Hiding

		To show or hide and element on the page with jQuery, select it and call the show () or hide() function on your selection
 */
			$("body").hide();
			$("body").show();

	/* Fading in, Fading out

		To show or hide an element on the page using a fading animation. select it and call the fadeIn() fadeOut()
		function on your selection

*/

			$("#section-one") .fadeOut();
			$("#section-one") .fadeIn();

	// You can add time in milliseconds as an argument to fade in and fade out (as well as other animations)

			$("#section-one") .fadeOut(1000);
			//1000 is equal to 1 second
			$("#section-one") .fadeIn(4000);
			//4000 is equal to 4 seconds

	// Hiding with sliding

		//Another way of hiding and showing items on the page is by using the slideUp() or slideDown() moethods

			$("#section-one") .slideUp(1000);
			//1000 is equal to 1 second
			$("#section-one") .slideDown(4000);
			//4000 is equal to 4 seconds

	// Animating CSS

		//Use jQuery's animate() method to animate most CSS properties that are numeric

	$(".my-element") .animate( {
		opacity: 0.25,
		width: 70%
	} , 2000);


	// The Click Event

		//JavaScript events can be fired on any html element

		//To monitor an HTML elemt for the click event and then fire a callback function with somecode:

		$("ul li a").click(
			function(){
				alert('imclicked!');
			}
			);

	// Using call back for a sequence

		// This example shows one animations triggering another when it's done, using an anonymous function callback:

			var animateMenu = function(){
				$(".menu").animate( {opacity: .5})
			}

			$(".menu").show(animateMenu)

	// Simplifyied Syntax

		// The last example could also be written like this:

		$(".menu").show( function(){
			$(".menu").animate( {opacity: .5} )
		})


