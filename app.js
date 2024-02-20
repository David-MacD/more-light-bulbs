/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
	2. Understand the different types that DOM methods work with.
  3. Implement a single event listener that handles clicks over multiple
			elements, and use the event object to discriminate.
  4. Take elements out of the DOM and insert elements into the DOM

Brief:
There are 3 rows of 5 lightbulbs on the screen. You need to implement a way for
each bulb to be toggled when they are clicked. In addition to toggling
themselves, you must also toggle their immediate siblings
(the bulbs to the left and right) AND the bulb in the same position in the
rows above and below (if they exist).

A bulb is ON when there is a span element present inside .lightbulb. Five
bulbs begin as ON.

BONUS: If all bulbs are ON, use `requestAnimationFrame` to set unique
colours to each bulb ever n seconds (you choose).

Expected Outcomes:
  1. When a bulb is clicked, toggle it and its immediate siblings, as well
      as the bulbs in the same position in the rows above and below it.
  2. The span should be the first child inside .lightbulb!
  3. BONUS: When all bulbs are lit simultanously, set each bulb to a random
      changing colour with `requestAnimationFrame`.
*/

// Place your plan and solution below!
