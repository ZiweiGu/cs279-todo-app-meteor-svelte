# cs279-todo-app-meteor-svelte

To run the app, first install [Meteor](https://docs.meteor.com/install.html).
Run the app using:
```
git clone https://github.com/ZiweiGu/cs279-todo-app-meteor-svelte.git
cd cs279-todo-app-meteor-svelte
cd simple-todos-svelte
npm install
meteor run
```

Meteor auto-generated many of the files for me, and the main app functionality code
can be found in the /imports/ui and /client folders.


Significant software concepts: Similar to the Svelte project a few weeks ago, 
this project also uses Svelte to compile much leaner JS bundles, with the 
additional integration with Meteor, a framework that supports building and deploying
Javascript applications for multiple devices (web + mobile). Meteor is similar to 
Flutter, but seems more lightweight and simpler to work with. Another Meteor concept 
I found very helpful is the idea of "hot module replacement", which updates the 
javascript modules before a rebuild even finishes so that developers can view changes
more quickly. 