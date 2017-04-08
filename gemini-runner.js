const selenium = require('selenium-standalone')
const Gemini = require('gemini/api')

selenium.start(runGemini)

function runGemini (err, seleniumInstance) {
  const gemini = new Gemini()
  const result = gemini.test('./test-e2e-screenshots', { reporters: ['flat'] })  
  result.then(reportGeminiResults.bind(null, seleniumInstance))
  result.catch(logGeminiError)
}

function reportGeminiResults(seleniumInstance, report) {
  seleniumInstance.kill()

  const fails = report.errored + report.failed
  if (fails > 0) {
    process.exit(1) // Exit with error
  }

  process.exit() // Exit with success
}

function logGeminiError (error) {
  console.log(error)
}
