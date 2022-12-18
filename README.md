# jupyterlab-themes

Forked the repo structure from [arbennett/jupyterlab-themes](https://github.com/arbennett/jupyterlab-themes).

## Installation
Currently, you have to install each of the themes individually. Themes be installed directly via `npm` with the standard way of installing lab extensions:

```
jupyter labextension install @atisor73/{$themename}
```

You can also install from source. This can be accomplished by running the following comands in a theme's respective subdirectory:

```
npm install
jupyter labextension link .
```

## Example screenshots

### Nord theme
![nord](./screenshots/nord.png "Nord theme screenshot")

### Mexico theme
![mexico](./screenshots/mexico-light.png "Mexico theme screenshot")



### My workflow
Because I am not a web developer, my familiarity with javascript and typescript is somewhat limited.
Thus, the workflow I've developed here may seem odd or convoluted to those with more experience in this
domain. Basically, my workflow has been to edit the base stylesheets in the `scss` directory, and using the
`gen_css.sh` script to generate all of the `css` files directly. Then I update my builds as necessary.
If you know a better way to do this, please let me know!

### Bumping versions
Because I have cobbled together a strange workflow for updating all of the themes at once it's a bit unwieldy
to update the versioning consistently. This is the command I use (mostly for my own sake):

```
sed -i 's/"version": "CURRENT_VERSION"/"version": "NEW_VERSION"/g' ./**/package.json
```
