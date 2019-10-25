# react-interactive-svg

A react component that helps you make svg shapes interactives

## Coding style

![GitHub last commit](https://img.shields.io/badge/STYLE-JAVASCRIPT%20STANDARD-yellow.svg?style=for-the-badge&logo=javascript)

## How to use

Import the component and the svg file like so:
```
    import { ReactComponent as Svg } from './your-svg-path.svg'
    import SvgWrapper from 'react-interactive-svg'
```

Wrap the SVG file using the SvgWrapper component and create a reference inside the svg file
```
    <SvgWrapper>
        <Svg ref={React.createRef()} />
    </SvgWrapper>
```
Insert the neccesary props to the wrapper component
```
    ...
    <SvgWrapper
        onElementHover={someFunction}
        onElementClicked={someOtherFunction}
        hoverBorderColor='#FFFF'
        activeColor='green'
        defaultHoverBorder='#000'
        allowedShapes=['polygon']
    >
    ...
```


## Props

| PROP | TYPE | DESCRIPTION | DEFAULT VALUE | REQUIRED
| ------ | ------ | ------ | ------ | -------
|onElementHover |Function | This is a callback function that gets triggered when hovering over the svg shapes. | | False
|onElementClicked |Function | This is a callback function that gets triggered when clicking over the svg shapes. This function should return a boolean to change the active color. | | False
|hoverBorderColor |String | This prop determines the boder color of the shape when hovered. | #009cff82 | False
|defaultHoverBorder |String | This prop determines the default boder color of the shape when mouseout event occurs. | black | False
|activeColor |String | This prop determines the fill color of the shape when the onElementClicked function returns a true boolean. | #009cff82 | False
|allowedShapes |Array | This prop determines the shapes that will be parsed by the svg component. | ['polygon', 'rect', 'circle'] | False


## Author

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://victorstein.github.io"><img src="https://avatars3.githubusercontent.com/u/11080740?v=3" width="100px;" /><br /><sub><b>Alfonso Gomez</b></sub></a><br /><a href="#question" title="Answering Questions">💬</a> <a href="#" title="Documentation">📖</a><a href="#tool" title="Tools">🔧</a> <a href="#review" title="Reviewed Pull Requests">👀</a> <a href="#maintenance" title="Maintenance">😎</a></td></table>

## License

This project is licensed under the ISC License 