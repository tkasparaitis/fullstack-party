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

- Data importer (gitIssueParser)
  - Read Symfony issue list from github
  - Import Issues and Comments to mysql
