# [Live Deployment](https://rick-morty-vite-react.vercel.app/)

# todo:
- change console logs, in SearchBar.jsx for a modal, that shows the error :D
- move all the reducer TICC logic to utils
- remove the X button when card renders in favourites

# Done
- Updated thumbnail 
- login form is way too wide in fullscreen
- unknown status is to opaque
- dead status is not as bright as alive status bar
- status bar is way too close to chara picture
- make the add one chara work again 
- Random chara ddition working whit redux now
- and a new route where it shows their favourite characters
- Make work the thingy were the state doesn't change once we change routes
- add redux to the whole app and maage the state there
- Once the global state is running, be sure to fix the removing characters on load behaivour
- add favourite option
- add a better looking navbar icons (svgs)
- Found how to use variables (Global styles) so all colors and default border radius change it for variables
- add a loading state to card component, and fetch the extra info there, if after the info was fetched there still was no new change, show the missing info component
  - furthermore check more exaustively what info is missing and just add [REDACTED] instead
  - added a pretty cool animated svg!
  - instead of doing another API petition just did a single one and everything goes way better now :DDDD
- Actually do something whit the login page kek
- Make the details component more robust
  - Only show available data and double check every prop
  - Only when every prop fails, show the crashed ship img
- Do the contact page
  - create a little input component and render those inside a container 
- add animation to the close btn
- Added (In poggers) in empty pages
- add cute heart favicon
- added work in progress components where needed
- upgraded navigation links
- input check on search


# Credits
- [Alien Png by smalllikeart](https://www.flaticon.com/authors/smalllikeart)
- [Thumbails on social media](https://css-tricks.com/essential-meta-tags-social-media/)
- [UNBELIABLE free svg src](https://loading.io/)

# Later updates
- [Redux RTK](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux updated](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#example-rest-api-and-client)

## Extra stuff
- [redux store devtools problem](https://github.com/jhen0409/react-native-debugger/issues/280)
- $ git merge BRANCH - Adds the changes in BRANCH to your current branch (dev) 


## Old redux installation
npm i redux@4.2.0 react-redux@^8.0.2 redux-thunk@^2.4.1
