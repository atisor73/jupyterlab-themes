# jupyterlab-themes

The structure for this repo is forked from [arbennett/jupyterlab-themes](https://github.com/arbennett/jupyterlab-themes). I've chosen four themes, two light: **mandarin-light** (custom) and **mexico-light** (base-16), and two dark: **frantic-contrast** (rainglow), and **rouge-dark** (rainglow). 



## Installation

Each theme exists as a separate npm package that can be installed individually. Themes be installed directly via `npm` with the standard way of installing lab extensions:

```
jupyter labextension install @atisor73/{$themename}
```



You can also install from source. This can be accomplished by running the following comands in a theme's respective subdirectory:

```
npm install
jupyter labextension link .
```



## Example screenshots

### mandarin-light
![](./screenshots/nord.png "Nord theme screenshot")

### mexican-light

![](./screenshots/mexico-light.png "Mexico theme screenshot")



### frantic-contrast

![](./screenshots/mexico-light.png "Mexico theme screenshot")



### rouge-dark

![](./screenshots/mexico-light.png "Mexico theme screenshot")



## Process (note-to-self)

**Creating a new theme:**

- copy the following from an existing theme: 
  -  `pacakage.json` 
  -  `src/`
  - `style/`
  - `tsconfig.json`
  - `webpack.config.js`
  - `yarn.lock`

- change `package.json` fields: name, version, typescript version (last functioning 3.9.2)

- change `src/index.ts` plugin id, style constant variable filepath, and registered name

- make sure `tsconfig.json` has "exclude": ["node_modules"], and "compilerOptions": {"skipLibCheck": true}

- edit `style/variables.css` 

  

**Viewing the theme:**

- Development install:

```bash
$ npm install 
$ npm jupyter labextension link .
```

- Rebuild package and JupyterLab:

```bash
$ npm run build
$ jupyter lab build
```



**Editing themes:**

- change `style/variables.css` 



**Publishing themes:**

- check/update version numbers in package.json

```bash
$ npm login
$ npm publish
```



**To disable extensions:**

```bash
$ jupyter labextension disable base16-nord
```

