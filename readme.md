This code exports a loadResource function that can be used to load a resource specified by a code. The resource can be either a remote URL in the browser environment or a local file in the Node.js environment.

In the code, the resources object maps the resource codes to their corresponding URLs or file paths. The loadResource function uses the fetch API in the browser environment to load the remote resource and parse it as JSON, and uses the built-in require function in the Node.js environment to load the local resource file.

The function returns a Promise that resolves with the loaded resource data or rejects with an error message in case the resource code is invalid or the resource loading fails.

Example of how you may use it in your project is below:

First you must import it. Then you can call the function

/*import { loadResource } from './resource';

loadResource('118n')
  .then(data => {
    // use the resource data
  })
  .catch(error => {
    console.error(error);
  }); */
