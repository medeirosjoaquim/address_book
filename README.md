## Address Book 📕

This is an app made with reactjs that consumes the api https://randomuser.me/.

## Demo online 🕹️

Check it online 👉 [here](https://stoic-shannon-2216c1.netlify.app/)

## Run ⚙️

### Dev server
```yarn start```

### Build dev
```yarn build:dev```

### Build dev
```yarn build:prod```

### Using Docker 🐋

On root folder:

```docker build -t addressbook .```
```docker run -p 80:80 -d addressbook```

Após, acesse o app em [localhost](http://localhost/)

### e2e Tests 🧪

```npx cypress open```

### unit Tests

TODO

## Write the DOCS 📚

### app-input:

Props: 
name:string = adds property `name` to the input component
label:string = shows a label over the input component
disclaimer:string  = shows a label below the input component
currencyMask:boolean = formats the value to currency($BRL) when input loses focus,
requiredMoneyValue:boolean = validation to make the input valid only with greater then zero values
maxVal:number = input wont receive values above the maxVal

### app-span:

message: string =defines the text to be shown by the app-span component
