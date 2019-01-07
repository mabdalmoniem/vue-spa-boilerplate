# vue-spa-boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

# The high-level structure of the template

- **app**
    - *module_X*
        - *components*
            - **ComponentOne.vue**
            - **ComponentTwo.vue**
            - **etc.vue**
            - **index.js** (This file will register all the components in this directory then exports them, this file job is to export components so we can import them elsewhere).

        - *routes*
            - **index.js** (The job of this file is only to export the routes of this module so we can later import them into the main collector: routes.js, we will import the components from the (components/index.js), which already exports them, so that we can define the route 'x' uses the 'y' component).

        - *vue*
            - **index.js** (This files exposes all the 'namespaced' [a/m/s/g] of this module, so we can later import them into the main collector: store.js)
            - **state.js**
            - **actions.js**
            - **mutations.js**
            - **getters.js**

        - *api*
            - **index.js** (This file exposes any functionality that deals with APIs and http requests, that will be used later by the vuex actions, so action files can still be lean and simple)

    - **routes.js** (This file pulls all the routes of every module in the app directory, each module has a routes/index.js file that contains the routes of that module, so routes.js is just like a collector, used to collect routes from all modules to export them so we can import them later from a one place (~root/router/index.js)).

    - **store.js** (This file pulls all the actions/mutations/state/getters in the app directory, each module has a vuex/index.js file that contains all the [a/m/s/g] of this module, so store.js is just like a collector,  used to collect [a/m/s/g] from all modules to export them so we can import then later from a one place (~root/vuex/index.js))

- *router*
    - **index.js** (This file creates and exports an instance of VueRouter, and imports all the routes from app/routes.js).

- *vuex*
    - **index.js** (This files creates and exports an instance of Vuex, containts all the modules that was imported from app/store.js).