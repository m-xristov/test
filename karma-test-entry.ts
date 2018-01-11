const testsContext: any = require.context("./src/tests", true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
