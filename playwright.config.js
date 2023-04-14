/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: 'e2e',
    timeout: 30 * 1000,
    repeatEach: 10,
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:8080/#',
        timeout: 120 * 1000,
        reuseExistingServer: true
    },
    workers: 1,
    use: {
        browserName: "chromium",
        baseURL: 'http://localhost:8080/',
        headless: true,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'off'
    },
    projects: [
        {
            name: 'chrome',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'chromium',
            }
          },
        {
            name: 'firefox',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'firefox'
            }
        },
        {
            name: 'safari',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'webkit'
            }
        },
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'on-failure',
            outputFolder: 'html-test-results'
        }]
    ]
};

module.exports = config;
