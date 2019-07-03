# WmhwSparkCare: Template instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# WmhwSparkCare: Project specific instruction

## Color styles

Only use 'Public' color variables in the style sheets
See 'variables.scss' for futher details.  

## Build to GitHub Pages

We are using GitHub pages to host the app. Any code that exists in the __gh-pages__ branch is what is hosted at __spark.goshoptology.com__. However since we are precompiling code in an Angular environment this becomes complex.

We are also built on Angular so we must push the __dist__ directory to the __gh-pages__ branch, not the __src__ directory. See Angular CLI GHPages for details (https://www.npmjs.com/package/angular-cli-ghpages, https://medium.com/@swarnakishore/deploying-angular-cli-project-to-github-pages-db49246598a1)

### How to:

#### 1) Do a build:
Run `ng build --prod`
or
Run `ng build --prod --base-href="/wmhw-spark-care"` if a suffix is necessary

#### 2) Put the dist files in the gh-pages branch of the same repo (it's now dist control - not source control ;)
Run `sudo angular-cli-ghpages --no-silent --dir=dist/wmhw-spark-care`

  *--no-silent (not sure why but it errors without it)*
  *--dir=dist/[projectName] point to the dir to clone over, otherwise it will grab the project dir instead of it's contents*
