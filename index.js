// breakpoints.js

const breakpoints = [
    { 'mobile': 580 },
    { 'tablets': 810 },
    { 'tabletm': 1024 },
    { 'tabletl': 1300 },
    { 'laptop': 1570 },
    { 'desktop': 1700 }
];

let currentBreakpoint = getCurrentBreakpoint(window.innerWidth);

function getCurrentBreakpoint(screenWidth) {
    for (let i = breakpoints.length - 1; i >= 0; i--) {
        const breakpoint = breakpoints[i];
        const breakpointName = Object.keys(breakpoint)[0];
        const breakpointValue = breakpoint[breakpointName];

        if (screenWidth >= breakpointValue) {
            return breakpointName;
        }
    }
    // If the screen width is smaller than all breakpoints, return a default value
    return 'mobile';
}

function updateBreakpointOnResize() {
    currentBreakpoint = getCurrentBreakpoint(window.innerWidth);
    return currentBreakpoint;
}

// Add event listener for screen resize
window.addEventListener('resize', updateBreakpointOnResize);

// Initial check for breakpoint when the page loads
updateBreakpointOnResize();

export { breakpoints, currentBreakpoint, getCurrentBreakpoint, updateBreakpointOnResize };