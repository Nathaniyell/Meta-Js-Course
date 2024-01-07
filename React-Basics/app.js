//React Folder structure
  //1. npm init react-app
  // robots.txt file - which is used for search engine optimization. 
  // Also, there is a manifest.json file - which is used to provide some metadata to a device when you're React powered web app is installed on it
  /*
  The package.json file lists information pertaining to my app, which allows npm to run several scripts and perform various tasks in the app itself. The package-loc.json file holds the list of all dependencies with a specific versions. The package.json file helps npm rebuild the app on another machine. Or if we delete the node modules folder with all the files that our project needs to run, the package-loc.json file has all the information for npm to be able to rebuild those files reliably. This file is there to ensure the npm tracks all the modules installations properly. As a general rule, it's better to leave these files where they are at the moment as they are required for the app to function.
  */
 //If the links are internal to the app - using the <a> tag is simply not the React way of doing things. 
 //The default export is used when the function name is the same as the file name and named exports are used when you want the function name to be different from the file name

 //A component is a single part or small piece of functionality like a button. Then you can think of a module as something that's larger than just one component like a series of components. This technique of splitting your code into several modules is known as modular programming, and it complements the component-based architecture of React.

 //Props
 //When two components communicate with each other, the component sending the props data is known as the parent, and the component receiving the props data is known as the child.
 //this parent-child relationship allows parent components of past data down to child components using props. It's also possible for parent components to send the same data to multiple child components
//In programming, a pure function is a function that will always return the same outputs for the same argument values that are passed in.