Implementation Notes:

OfficeMonitor.js
-Initialises the widgets and the server.
-Requests the initial state from the server.
-Listens for events being fired from the server.
-Gets the score from all the widgets to work out the mood of the office.

Server.js
-Provides the initial state to the office monitor.
-Fires a random event every 1 second.

Widget.js
-Represents a thing we are monitoring ie. fridge, coffee, temp etc..

Scoring Table:
-Defines the scores for different ranges of values.
-Temperature has been given double the importance/weighting as fridge and coffee.

index.html:
-I avoided changing the mark-up however I did add in multiple scripts tags so I could break up the code nicely.
In a real life app I would bundle the JS.

Scaling:

If we want to add another thing to monitor we just need to:
-add the widget div to the index.html
-initialise the widget in OfficeMonitor.js initialiseWidgets()
-define its scoring functions in ScoringTable.js

In order to reduce these steps I would advise changing the server API to return the actual values
(rather than actions) or standardise the action names. This would allow us to populate the widgets
map in OfficeMonitor.js simply by looking at what div's were defined in index.html.
In doing so only 2 tasks would need to be done:
-add the widget div to the index.html,
-define its scoring functions in ScoringTable.js

Future Improvements:

Dynamic weighting, some examples:
-as it gets colder the weighting of the temperature should increase.
-as it gets hotter the weighting of the fridge should increase.

In addition:
-the scoring of the fridge and coffee will be effected by the number of people in the office
