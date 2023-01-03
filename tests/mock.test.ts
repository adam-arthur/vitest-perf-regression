import { describe, it, expect } from 'vitest'

// All tests within this suite will be run in parallel




const numMockSuites = 100
const numMockTestsPerSuite = 10

runMockTestSuite({
    numMockSuites: 100,
    numMockTestsPerSuite: 50,
})

function runMockTestSuite({ numMockSuites, numMockTestsPerSuite}) {
    for (let suiteIdx = 0; suiteIdx < numMockSuites; suiteIdx++) {
        describe(`Suite ${suiteIdx}`, () => {        
            for (let testIdx = 0; testIdx < numMockTestsPerSuite; testIdx++) {
                it(`Test ${testIdx}`, () => { 
                    expect(true).toBe(true)
                })
            }
        })
    }
}
