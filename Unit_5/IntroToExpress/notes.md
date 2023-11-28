# Getting Started
- Create a `package.json`
    -In the terminal: `npm init -y`|| `nmp init`
        - initalized our project.
    - An index of the project.
        - denote required dependencies to run the project.
- Instal our dependencies
    -express: `npm i express`
- Create a `.gitignore` file
    -`/node_modules` within .gitignore.
    -tells our local repository to ignore the `node_modules` folder when backing up to GitHub.
    - node_modules folder
        - Provides us access to any "behind the scenes" code that helps run express and any dependency installed.
        - When we need to install/reinstall our node_modules, in the terminal we'll type `npm install`
- package-lock.json
    - locks project into required dependencies.
Helps with our versioning.

## CRUD
most common methods used:
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE 