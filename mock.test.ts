import { describe, it, expect } from 'vitest'

runMockTestSuite({
    numMockSuites: 100,
    numMockTestsPerSuite: 50,
})

function runMockTestSuite({ numMockSuites, numMockTestsPerSuite}) {
    for (let suiteIdx = 0; suiteIdx < numMockSuites; suiteIdx++) {
        describe(`Suite ${suiteIdx}`, () => {        
            for (let testIdx = 0; testIdx < numMockTestsPerSuite; testIdx++) {
                it(`Test ${testIdx} - expected to succeed`, async () => { 
                    expect(true).toBe(true)
                })

                it(`Test ${testIdx} - expected to fail`, async () => { 
                    expect(false).toBe(true)
                })
            }
        })
    }
}
