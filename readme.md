# Thunderfoot Breakpoints

At thunderfoot we have a set of 6 breakpoints
- mobile - 580 
- tablets - 810
- tabletm - 1024
- tabletl - 1300
- laptop - 1570
- desktop - 1700

### Install
```sh
npm i @teamthunderfoot/breakpoints
```
### Setup
```sh
import {breakpoints} from '@teamthunderfoot/breakpoints';
```
### Setup
```sh
console.log(breakpoints[0]) // same as mobile

// loop array
breakpoints.forEach(element => {
    if(element.tablets){
        console.log('only for tablet Small / 810px')
    }
});

//convert to object
var bk = breakpoints.reduce((target, inner) => Object.assign(target, inner), {})
console.log(bk.mobile)

```

[Thunderfoot](https://teamthunderfoot.com/)

