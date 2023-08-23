# Breakpoints.js Documentation

`breakpoints.js` is a JavaScript module for managing responsive design breakpoints. It provides functions for calculating the current breakpoint based on the screen width and dynamically updating the current breakpoint on window resize.


## Installation

```
npm i @teamthunderfoot/breakpoints
```

## Usage

### Importing the Module


```javascript
import { breakpoints, currentBreakpoint, getCurrentBreakpoint, updateBreakpointOnResize } from '@teamthunderfoot/breakpoints';
```

### Breakpoints
```
let bk = breakpoints.reduce((target, inner) => Object.assign(target, inner), {})
console.log(bk.mobile)
```

### Using currentBreakpoint:
```
let screenWidth = window.innerWidth; 
let currentBreakpoint = getCurrentBreakpoint(screenWidth);
console.log('Current Breakpoint:', currentBreakpoint);
```

### Updating the Current Breakpoint:
```
// Add event listener for screen resize
window.addEventListener('resize', () => {
    let currentBreakpoint = updateBreakpointOnResize();
    console.log('Current Breakpoint:', currentBreakpoint);
});
```
