# Test-Driven Development By Example - Kent Beck
>Write clean code that works.

Here is the source code in `TypeScript` of the examples given 
in [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck)'s book
[Test-Driven Development By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/) 

## Preface
When I first heard the term TDD some years ago, I got very excited about it. 
I was writing my first C++ and JAVA programs at college and mixing PHP, SQL, and HTML 
in one single infinite file, and I had a barely idea of what an automated test was,
but just that term "test-driven development" sounded really cool. 

After being involved into software development for some years and going through the pain of 
testing because of design issues, code smells, untestable code, 
tests that doesn't add value, etc, I have understood the importance of testing and 
writing good quality code, not only to be proud of your work but to achieve business goals, 
which is what at the end really matters. **A good software design and tests that give you confidence 
make the difference between delivering the same feature in one week or one month**.
I have been practicing TDD for a while in some projects based on some articles and tutorials and 
I can say based on my own experience that TDD will help you:
- Understand well what you are going to develop
- Get confident about what you are delivering and any further change it requires
- Fail fast
- Code like you were in a video game. It gets really fun, trust me

Then after going through [Clean Code](https://www.amazon.com/-/es/Robert-C-Martin/dp/0132350882) 
by Robert C. Martin, another _must-read_ book for any 
software engineer, it was time to go for a book that has been at the top of my list for a while.

## How is this organized?
Each chapter of the book is represented as a new branch on the repo, 
so it gets easier to compare and navigate through the evolution of the classes and tests

## Setup
Requires: `node.js v10`, `npm v6`, `typescript v3`

Tests and asserts are running with [Jest](https://jestjs.io/). 
And [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is
used to keep code quality.

#### Install dependencies
```
npm install
```
#### Run tests
```
npm run test
```

## Quotes
- _Clean code is simple and direct. Clean code reads like well-written prose._ - Grady Booch
- _Clean code always looks like it was written by someone who cares_ - Michael Feathers

Those two first belong to Clean Code book, but I like them a lot.

- _Think about how you would like the operation in your mind to appear in your code.
You are writing a story. Invent the interface you wish you had_

## Notes


