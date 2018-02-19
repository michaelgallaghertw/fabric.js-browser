# fabric.js-browser
Fabric.js reworked to support Webpack bundling

This project has a specific Fabric.js version checked in, which as part of its build, will
modify to work currently under webpack.

The new dependency (under `/dist`) will not add to the global scope, and is in fact a builder
function.

### Build

`npm run build`

### Usage

```
require(['fabric.js-browser'], function(fabricBuilder) {
	var fabric = fabricBuilder();
	...
	var cvs = new fabric.Canvas()
	...
});