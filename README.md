# Animation.style

[![GitHub Version](https://img.shields.io/github/v/release/guillaume-rygn/animation-style.svg?style=for-the-badge)](https://github.com/guillaume-rygn/animation-style/releases) [![License](https://img.shields.io/badge/license-hippocratic%20license-orange.svg?longCache=true&style=for-the-badge)](https://github.com/animate-css/animate.css/blob/main/LICENSE)

## ***It has never been so easy to animate elements !***

## Installation

Install with npm:
```shell
npm install animation.style --save
```

or install with yarn: 

```shell
yarn add animate.css
```

and in your CSS file add: 

```
@import 'node_modules/animation.style/animation.css'
```

Or install with CDN in your HTML file: 

```
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animation.style@latest/animation.min.css"/>
</head>
```

## How to use it 

After add Animation.style in head of your html files. You can add the class **animation** along with any animation name like :

```
<p class="animation fadeOut">I'm a animated element</p>
```

You can set up the duration with class **duration-[i]** with i between 1 to 10.
Same for the delay, you can add a delay for animation with class **delay-[i]** with i between 1 to 10.
You can add multiple animation juste need to call it by their name.

basic example : 

```
<p class="animation fadeIn duration-3 delay-5">I'm a animated element</p>
```


## Animation name

- **fadeIn**
- **fadeOut**
- **leftIn**
- **leftOut**
- **rightIn**
- **rightOut**
- **topIn**
- **topOut**
- **bottomIn**
- **bottomOut**

## Founder

| [Guillaume Reygner](https://github.com/guillaume-rygn) |
| ----------- |
| Animation.style Creator | 

## License

Animation.style is licensed under the [Hippocratic License](LICENSE.md)).

## Code of conduct

This project and everyone participating in it is governed by the [Animation.style Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. 


## Contributing

Everyone can be contributing. Please make a pull request and show the contributing in a [pen](https://codepen.io).


