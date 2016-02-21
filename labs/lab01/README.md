# Module definitions patterns

## Named Exports

The most basic method for exposing a public API is using named exports, which consists in assigning all
the values we want to make public to properties of the object referenced by `exports` (or `module.exports`)

Go to `/labs/lab01/named_exports` and write what is necessary so `main.js` can to run.

## Exporting a function

One of the most popular module definition patterns consists in exporting a single function. Its main strength
it's the fact that it exposes only a single functionality, which provides a clear entry point for the module,
and makes it simple to understand and use.

Go to `/labs/lab01/exporting_function` and write what is necessary so `main.js` can to run.

## Exposing a constructor

A module that exports a constructor is a specialization of a module that exports a function. We allow the user to
create new instances using the constructor, but we also give them the ability to extend its prototype and forge new classes

Go to `/labs/lab01/exporting_constructor` and write what is necessary so `main.js` can to run.

## Exporting an instance

We can leverage the caching mechanism of require() to easily define stateful instances—objects with a state created
from a constructor or a factory, which can be shared across different modules.

Because the module is cached, every module that requires the logger module will actually always retrieve the same
instance of the object, thus sharing its state.

Go to `/labs/lab01/exporting_instance` and write what is necessary so `main.js` can to run.