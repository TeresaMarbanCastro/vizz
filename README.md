## Legend Tool
This is a small app boostraped with [Create React App](https://github.com/facebook/create-react-app). 

## Architecture
This App is based on the concept of composition. Thus, there is a main view page (Home) instantiated in App, and then the rest of the components are instantiated wherever they are needed. 

One of the things taken into account to build this app was to try to make small dumb components which are controlled in necessary more responsible ones. 

The smallest units in this project are Icon, Title, Toolbar and Modal. They are self-contained and they receive props to be used. Button, on the other hand, has a dependency of Icon, but it was decided to structure it this way given that this project contains several buttons with icons. 

The second level would be legendTypeItem. Here, we can find three small components (Basic, Cloropeth, Gradient) which are managed by LegendTypeItem. Given their characteristics in common, a following step would be to create a unique component which could contain conditions to return Basic, Cloropeth or Gradient instead of having the three of them. It could be done having the legendTypeItem doing the managing.

Legend is where the aforementioned main components are orchestrated. It renders a section which contains the header with the toolbar and its tooltips, controls the expansion of the legendItemType and shows/hides info modal. 

### Next steps
As aforementioned, there are things that need to be done, such as the refactoring of the legend item type. 

Another further step would be testing the components and verifying proptypes. 

Regarding accessibility, even though main aria tags have been implemented and a11y has been taking into account in the design phase, more advances need to be done. 
 - Focus managing.
 - Keyboard navigation (esc to close modal)
 - Alternative to color in graphs
 - Semantic labelling of list in Basic component

 Other improvements involve refinement of design and responsiveness, adding transitions and animations, using destructuring for props to increase readability and including i18n files for translation should the app be used in other languages.


## Running Script

In the project directory, you can run `yarn start` to start the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.