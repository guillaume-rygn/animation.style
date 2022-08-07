# Animation.style

[![GitHub Version](https://img.shields.io/github/v/release/guillaume-rygn/animation-style.svg?style=for-the-badge)](https://github.com/guillaume-rygn/animation-style/releases) [![License](https://img.shields.io/badge/license-hippocratic%20license-orange.svg?longCache=true&style=for-the-badge)](LICENSE.md)

## ***It has never been so easy to animate elements !***

## Installation

Install with npm:
```shell
npm install animation.style --save
```

or install with yarn: 

```shell
yarn add animation.style
```

Initialize: 
In your CSS file add: 

```
@import 'node_modules/animation.style/animation.css'
```

Or install with CDN in HEAD of your HTML file: 

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animation.style@latest/animation.min.css"/>
```
Add JS script: 

```
<script src='node_modules/animation.style/animation.js'></script>
```

## How to use it 

After add Animation.style in head of your html files. You can add the class **animation** along with any animation name like :

```
<p class="animation fadeOut">I'm a animated element</p>
```

You can set up the duration with class **duration-[i]** with i between 1 to 10.
Same for the delay, you can add a delay for animation with class **delay-[i]** with i between 1 to 10.
You can add multiple animation juste need to call it by their name.

### Intersection Observer 

With the latest version of animation.style you can directly integrate the observer intersection to your animations ! 
For add an animation you just need to call it in data attribute (don't forget the class **animation**) and add the class **intersection** to the element.  

```
<p class="animation intersection" data="fadeOut">I'm a animated element</p>
```

## Example : 

Basic example: 
```
<p class="animation fadeIn duration-3 delay-5">I'm a animated element</p>
```
Add multiple animation to the same element example: 

```
<p class="animation fadeIn leftIn">I'm a animated element</p>
```

Same example with intersection observer:

```
<p class="animation intersection" data="fadeIn leftIn">I'm a animated element</p>
```

## Animation name

- **[fadeIn](source/fade/fadeIn.css)**
- **[fadeOut](source/fade/fadeOut.css)**
- **[leftIn](source/translate/leftIn.css)**
- **[leftOut](source/translate/leftOut.css)**
- **[rightIn](source/translate/rightIn.css)**
- **[rightOut](source/translate/rightOut.css)**
- **[topIn](source/translate/topIn.css)**
- **[topOut](source/translate/topOut.css)**
- **[bottomIn](source/translate/bottomIn.css)**
- **[bottomOut](source/translate/bottomOut.css)**

## Founder

| [Guillaume Reygner](https://github.com/guillaume-rygn) |
| ----------- |
| Animation.style Creator | 

## License

Animation.style is licensed under the [Hippocratic License](LICENSE.md).

## Code of conduct

This project and everyone participating in it is governed by the Animation.style [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. 


## Contributing

Everyone can be contributing. Please refer to the [contribution](CONTRIBUTING.md) file procedure to contribute.


