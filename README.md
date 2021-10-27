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
[x] start game with onboarding (then asyncStorage to do it only once)
[x] settings saving to async storage
[x] onboarding styling (with some noice images) and typing
~~[ ] back button when onboarding from menu (probably can use onboardingSeen state for that)~~
[x] icon
~~[ ] better dictioanary? maybe? Maybe not. It's challenging as is, and that's ok~~

To fix:
[x] when you click very fast in battle mode, you can mess it up (the round number never changes)
It probably has to do with being dependant on the transition state to fire up some actions.
I think we need to get rid of that. Also - the flickering of color/state is anoying after all (battle mode summary)
[x] round number ending with battle mode countdown timer
[x] you can click very quickly on the "udało się" button and you will get more than +1 score
[x] onboarding as seen only after going through it (otherwise you can open app, close, and never see onboarding)
[x] menu landscape orientation messess up onboarding button (do them absolute)
[x] better onboarding - need to emphasize that you cannot use words like "NIE", "TAK"
[x] fix settings - you can set set input to some really high number, click "BACK", and then battle mode is messed up. BETTER VALIDATION OF INPUTS
[x] In MENU, help button is overlapping with game mode button
[ ] Consider adding some logo to menu - but it'd need to have dynamic size to handle landscape well.
[ ] Publish :)

[ ] IF YOU EVER COME BACK TO HERE - set up pipeline to generate .aab automatically

[ ] There is "a list of sjp words for games .zip" - we can use that if something is wrong with the current words
