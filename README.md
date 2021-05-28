<div align="center">
  
# :iphone: Easy On board :fist:

:blue_book: **[Description](#description)**

:star: **[What is new ?](#what-is-new-)**

:boom: **[ShowCase](#showcase)**

:zap: **[Installation](#installation)**

:key: **[Usage](#usage)**

:page_facing_up: **[Examples](#examples)**

:ok_hand: **[Why easy-on-board ?](#why-easy-on-board-)**

[![Twitter Follow](https://img.shields.io/twitter/follow/HossamElgzeery?label=Follow%20Me&style=social)](https://www.twitter.com/HossamElgzeery)

</div>

# Description

easy on Board is a react native package that helps you to make an onBoard Screen without efforts.

# What is new ?

- **version 0.0.5** :

  - Adding current component indicator
  - Changing text on the **Next** button to appear as **Finish** when reaching the last component
  - Changing some props naming convention

- **version 0.0.6** :

  - Adding navigation between the components through the indicators

- **version 1.1.0** :

  - Removing indicator keys warning
  - Implementing swipe gesture

- **version 2.2.0** :

  - Adding useOnBoard hook :tada:
  - Applying some performance improvements

# ShowCase

<img src="https://user-images.githubusercontent.com/31576852/118155700-cc9d2e80-b418-11eb-8e5d-ed278d50b8d4.gif" width="30%" />

# Installation

```
#npm
npm install easy-on-board

#yarn
yarn add easy-on-board

```

# Usage

**we have two components**

- **EasyOnBoard.Screen** which is the wrapper of the on-board components and it has 12 props :

  - **children** which are wrapped components (**Required**)
  - **onFinish** the function to be called on last component which could be navigation to another screen (**Required**)

  - **nextButtonText** the text to be shown on next button (**Optional**)
  - **nextTextStyle** the styling props of the text (**Optional**)
  - **nextButtonStyle** the button styling props (**Optional**)

  - **backButtonText** the text to be shown on back button (**Optional**)
  - **backTextStyle** the styling props of the text (**Optional**)
  - **backButtonStyle** the button styling props (**Optional**)

  - **indicator** boolean value to determine showing indicator or not " _default value = false_ " (**Optional**)
  - **indicatorColor** color of the non-current indicators (**Optional**)
  - **selectedIndicatorColor** color of the current indicator (**Optional**)

  - **swipeable** boolean value to determine allowing swipe gesture to change the current component or not " _default value = false_ " (**Optional**)

- **EasyOnBoard.Component** which is the wrapped component as we will see and it has 3 props:

  - **text** (**Required**)
  - **imageSource** (**Required**) and this takes the source of the image , like "require('./myimage.png')" or "{uri: 'https://reactjs.org/logo-og.png'}"

  - **style** component styling props (**Optional**)

**:fire:or you can just use The Hook:fire:**

- **useOnBoard** and it takes 4 props and finish the whole work for you :

  - **children** which is an array of objects where each object has 2 properties {text,imageSource} (**Required**)

  - **onFinish** the function to be called on last component which could be navigation to another screen (**Required**)

  - **swipeable** boolean value to determine allowing swipe gesture to change the current component or not " _default value = false_ " (**Optional**)

  - **indicator** boolean value to determine showing indicator or not " _default value = false_ " (**Optional**)

## Package Import :

```javascript
import EasyOnBoard, { useOnBoard } from "easy-on-board";
```

# Examples

```javascript
<EasyOnBoard.Screen
  onFinish={() => {
    alert("this is last component");
  }}
  indicator
  swipeable
>
  <EasyOnBoard.Component
    text="First Component"
    imageSource={require("./src/assets/first.png")}
  />
  <EasyOnBoard.Component
    text="Second Component"
    imageSource={require("./src/assets/second.png")}
  />
  <EasyOnBoard.Component
    text="Third Component"
    imageSource={require("./src/assets/first.png")}
  />
</EasyOnBoard.Screen>
```

**Or use the hook**

```javascript
const children = [
  { text: "First component", imageSource: require("./src/assets/first.png") },
  { text: "Second component", imageSource: require("./src/assets/first.png") },
  { text: "Third component", imageSource: require("./src/assets/first.png") },
];

const onFinish = () => {
  alert("tada enjoy the hook");
};

const onBoardScreen = useOnBoard({
  onFinish: onFinish,
  swipeable: true,
  indicator: true,
  children: children,
});
```

# Why easy-on-board ?

- :heavy_check_mark: Fixed wrapped component "**EasyOnBoard.Component**" :muscle:

- :heavy_check_mark: Dynamic wrapped component "any component can be used as wrapped component" :muscle:

- :heavy_check_mark: Dynamic style of the buttons :muscle:

- :heavy_check_mark: Current component indicator :muscle:

- :heavy_check_mark: Navigation through the Indicators :muscle:

- :heavy_check_mark: Adding swipe gesture to change current component :muscle:

- :heavy_check_mark: You can use the hook feature for the fast creation of OnBoard Screen :tada:
