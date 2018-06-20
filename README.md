## Few simple requirements

- Design should be recreated as closely as possible.
- Design must be responsive. Because we live in our smartphones and we will check with them for sure.
- Use GitHub V3 REST API to receive data. [Docs here](https://developer.github.com/v3/)
- Use popular PHP framework (SlimPHP, Lumen, Symfony, Laravel, Zend or any other)
- Use AngularJS or ReactJS.
- Use CSS preprocessor (SCSS preferred).
- Browser support must be great. All modern browsers plus IE9 and above.
- Use a Javascript task-runner. Gulp, Webpack or Grunt - it doesn't matter.
- Do not commit the build, because we are building things on deployment.

## Few tips

- Structure! WE LOVE STRUCTURE!
- Maybe You have an idea how it should interact with users? Do it! Its on you!
- Have fun!


## Project parts

- Data importer (`gitIssueParser`)
  - [x] Database structure **(DONE)**
  - [x] Read Symfony issue list from github **(DONE)**
  - [x] Import Issues and Comments to mysql **(DONE)**
- Front End Angular (`tn-app`) 
  - [x] Login  **(DONE)**
  - [x] Issues **(DONE)**
  - [x] Issue **(DONE)**
  - [x] Comments **(DONE)**
  - [ ] Connect with Github *(In progress)*
  - [x] JWT Login **(DONE)**
  - [x] Moment.js **(DONE)**
  - [x] Custom Scrollbar **(DONE)**
- Web Services
  - Node.js (`express`)
    - [x] JWT Auth **(DONE)**
    - [x] Login **(DONE)**
    - [x] Get Issues **(DONE)**
    - [x] Get Comments **(DONE)**
    - [ ] Secure all methods withJWT *(In progress)*
  - Java (`Spring`)
    - [x] JWT Auth **(DONE)** 
    - [x] Login **(DONE)**
    - [ ] Get Issues *(In progress)*
    - [ ] Get Comments *(In progress)*
  - Python (`Flask`)
    - [x] JWT Auth **(DONE)** 
    - [x] Login **(DONE)**
    - [ ] Get Issues *(In progress)*
    - [ ] Get Comments *(In progress)*
  - PHP (`Symfony`) *(In progress)*
    - [ ] JWT Auth *(In progress)* 
    - [ ] Login *(In progress)*
    - [ ] Get Issues *(In progress)*
    - [ ] Get Comments *(In progress)*
- Performance tests
  - [ ] Auth *(In progress)*
  - [ ] Get Issues *(In progress)*
