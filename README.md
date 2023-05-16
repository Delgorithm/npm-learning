# npm-learning

## NPM : Node Package Manager

- A software registry that provides code availability (software library)
  All commandes are executed directly in the terminal (ITERM), specifically in the projet's directory.

## NPM CLI (Command Line Client)

```
npm install <package>
```

## Software Manager

All npm packages are defined in files called package.json

The content of package.json must be written in JSON

What is package.json? :

A file that serves as the "constitution" for the project.
It includes the packages and applications it depends on, information, metadata, name, description, author..."

## NPM Init

```
npm init
```

Will give a `package.json` written in a `JSON`

Ex :

```
{
    "name": "foo",
    "version": "1.2.3",
    "description": "A package for fooing things",
    "main": "foo.js",
    "keywords" : ["foo", "fool", "foolish"],
    "author" : "John Doe",
    "licence" : "ISC"
}
```

## Possibility to configure the package.json later. To do this, we create a default one:

```
npm init --yes
```

Why is it useful?

Important when seeking to share it
We find both:

### dependencies

Objects that contain the libraries needed for the project's environment and the project itself.

⇒ Dependencies are objects that contain the libraries needed for the project's environment and the project itself.

### devDependencies

Packages in the package.json file necessary for project development.

⇒ Packages that are only necessary for local development and testing.

Ex :

```
{
  "name": "metaverse",
  "version": "0.92.12",
  "description": "The Metaverse virtual reality. The final outcome of all virtual worlds, augmented reality, and the Internet.",
  "main": "index.js"
  "license": "MIT",
  "devDependencies": {
    "mocha": "~3.1",
    "native-hello-world": "^1.0.0",
    "should": "~3.3",
    "sinon": "~1.9"
  },
  "dependencies": {
    "fill-keys": "^1.0.2",
    "module-not-found-error": "^1.0.0",
    "resolve": "~1.1.7"
  }
}
```
