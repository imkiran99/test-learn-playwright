import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
// testMatch : ["basicInteractions.test.ts"],
timeout: 60000,
reportSlowTests: null,
// retries : 2,   // this is used to retry the test again
use: {
  headless: false,
  // screenshot:"only-on-failure",  // to capture screenshots
  // video: "retain-on-failure"  // to record the video and retain it in case of failure.

  
//API TESTING
baseURL: 'https://api.github.com',
extraHTTPHeaders: {
  // We set this header per GitHub guidelines.
  'Accept': 'application/vnd.github.v3+json',
  // Add authorization token to all requests.
  // Assuming personal access token available in the environment.
  'Authorization': `token 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`,
}

},
reporter : [["dot"], 
            ["json", {outputFile: "jsonReports/jsonReport.json" }],
            ["html", {open: "never"}]
          ]
// the above code is used to create a report of given type. In above command, we are creating report in
// 3 different formats.


};
export default config;
