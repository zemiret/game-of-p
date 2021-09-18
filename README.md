Well. Basic version is done.

CAN BE PUBLISHED

Features left to add:

[x] word lookup opening browser
[x] main menu to chose game mode, go to settings, choose "help - onboarding"
[x] help button on the main screen that leads to onboarding screens
[x] "onboarding" screens explaining the game
[x] onboarding should always start with 1st screen (after navigating away and coming back)
[x] team mode (2 teams, timer countdown per word, words amount per game)
[x] fix word on wordchallenge re-render when finished (when navigation happens).
The problem is that the currentTeam/roundNumber changes and the new word is dropped
before navigation happens. Adding wordChallenge to reducer's state does not help
because it is still dependant on the `currentTeam` state
[x] timer
[x] exit links under screens
[x] settings (dark mode?, team settings (countdown time, word amount))
[x] battle mode styling
[] start game with onboarding (then asyncStorage to do it only once)
[x] settings saving to async storage
[] onboarding styling and typing
[] back button when oboarding from menu
[] icon
