## This is a [research code](https://meiert.com/en/blog/20140716/research-and-production/).

Gemini is looking good for me as a test runner for checking CSS regressions.

I've created minimum setup example to check if it fits into my workflow and to get some taste of using it.

### Run Gemini with a single command
Right now you need to call `selenium-standalone start` and `gemini test` in different terminals. I don't like that behavior, so I've tried to use their programmatic APIs. See example in [gemini-runner.js](gemini-runner.js).

### Use Gemini in the docker container for CI
This task is achievable with Gemini's flat reporter, running Gemini with a single command and [running browsers headlessly](https://github.com/vvo/selenium-standalone#running-headlessly).

### How Gemini fits into current project folder structure?
You need to change paths in several places:
* in npm scripts: `gemini test ./__DESIRED_PATH_HERE__ --…`,
* in config's `screenshotsDir` parameter,
* in `gemini-runner.js` at running tests: `gemini.test('./__DESIRED_PATH_HERE__', { reporters: ['flat'] })`.

- - -

After some tweaking I saw that Gemini is very comprehensive and configurable utility. Going to use in current projects.

Another project to check Gemini in use: https://github.com/mshatikhin/gemini-react-starter
