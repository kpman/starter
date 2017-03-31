import path from 'path';

import reporters from 'jasmine-reporters';

const reporter = new reporters.JUnitXmlReporter({
  // Jest runs many instances of Jasmine in parallel. Force distinct file output
  // per test to avoid collisions.
  consolidateAll: false,
  filePrefix: 'jest-junit-result-',
  savePath: path.resolve('./jest-report/'),
});
jasmine.getEnv().addReporter(reporter);
