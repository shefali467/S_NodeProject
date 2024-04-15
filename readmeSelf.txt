to create package.json file - use below cms 
~npm init 
it will initiate the node package manager in the given folder u mentioned
//npm not always come in outer folder

it will ask for some configs like below 
package name: (2_npm)
version: (1.0.0)
description: 
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to F:\Netlink-2024-all\n_app\2_NPM\package.json:

{
  "name": "2_npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
------------------------------------------------------
Node Modules Folder:
It consists of all the files that requires to run a package 

so to not commit this huge amount of files of node module 
U can create .gitignore file in which u can mention all files or folders name with / to be ignored by git.