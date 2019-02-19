# Sequence memory game
Pick the correct items in the order shown

## Introduction
Welcome to the Letgo Fullstack technical test!

For this test we want to see your skills and knowledges by developing a small and fun game: **Sequence memory game**.

We expect from you a clean and well structured code.

## The Game
Each round adds one randomly item to the end of the sequence.

#### Example
We have 4 items, lets say: **Dog, Cat, Hourse and Frog**:
* the **first round Cat is highlighted** and the **user should click on Cat** to pass to the next round.
* for the **second round Cat is highlighted and then Dog**, so the **user should click on Cat and then Dog**.
* for the **third round Cat is highlighted, then Dog and then Cat again** (because is randomly, so items can repeat), so the **user should click on Cat, then Dog and then Cat again** to pass to the next round.

This is a video of another example about this game but with colors: [youtube video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4)

## Requirements
You should use this project to develop your solution and use **React with Redux** (they are added in `package.json` file along with **redux-thunk, react-dom, and react-redux**)

You can use your favourite style library/preprocessor such a **less, stylus, sass, postCss**...we use **[styled-components](https://www.styled-components.com/)**. Take in mind that depending of which tool you choose probably you would need to add some configurations in **webpack.config.js** file.

The **items should be fetched from a public API** like [https://pokeapi.co/](https://pokeapi.co/). You can find many of them in the following repository: [Public APIs list](https://github.com/toddmotto/public-apis).

Just keep in mind that the API chosen should allows you to **fetch a specific number of items**. For example, with the **pokeapi** you can call `https://pokeapi.co/api/v2/pokemon?limit=9` which returns the first 9 pokemons. You can use your favourite **library for fetching data**. We use **[axios]()**.

## How to deliver
You have 2 options:

* You can fork this repository and send us the url of your solution
* Compress your solution (without the `/node_modules` and `/build` folders) and send us the zip file