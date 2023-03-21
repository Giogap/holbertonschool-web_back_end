# ES6 Basics

## 0. Const or let?

Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
Execution example:

bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 


## 1. Block Scope
2. Arrow functions
3. Parameter defaults
4. Rest parameter syntax for functions
5. The wonders of spread syntax
6. Take advantage of template literals
7. Object property value shorthand syntax
8. No need to create empty objects before adding in properties
9. ES6 method properties
10. For...of Loops
11. Iterator
12. Let's create a report object
