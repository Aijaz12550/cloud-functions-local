# cloud-functions-manager


Currently this package is usable to run lambda functions locally.
Future release will contain more features and will make testing very easy.


## Install

```bash
npm install cloud-functions-manager --save-dev
```

## add the script in package.json file

```
"test" : "node node_modules/cloud-functions-manager"
```

## How to run?

```
npm run test ./test/test1.json
```

Here we have test folder at the root and inside the test folder we have a file test1.json.
Following is the data in side test1.json will look like.

```
{
    "event": {"body":{ "name":"hello"}},
    "path": "../../../test/app.js",
}

```

here *event* and *path* are required fields and in the event is the input for lambda function and path is the location of file.
in the above example we have test folder at root and then inside we have a file app.js which contain the code for lambda function.

Type the path of your function in following way
../../../root_folder/path_to_code

## How to set environment variables?
Create test.env file at the root and add the variables there which you are using inside lambda function.

## Issue
If you find any issue feel free to report it event you are not confident
```
https://github.com/Aijaz12550/cloud-functions-manager/issues
```

## Contribution
Every contribution is important and we will merge it after review.