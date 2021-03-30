## Address Book 📕

This is an app made with reactjs that consumes the api https://randomuser.me/.

## Demo online 🕹️

Check it online 👉 [here](https://stoic-shannon-2216c1.netlify.app/)

## Run ⚙️

### Dev server
```yarn start```

### Build dev
```yarn build:dev```

### Build prod
```yarn build:prod```

### Using Docker 🐋

On root folder:

```docker build -t addressbook .```
```docker run -p 80:80 -d addressbook```

The app will be running on [localhost](http://localhost/)

### Unit Tests

The unit tests are setup with React Testing Library and run by jest.
The tests produce an HTML file that can be found in the root folder
with the name test-report.html.

To run the tests use the command: 

```yarn test```
