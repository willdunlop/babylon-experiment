import { expect } from 'chai';
import * as THREE from 'three';
// include three in the global scobe, install as dev dependency
global.THREE = THREE;

/** Impor Specs */
// import InitializeSpec from "./initialize.spec";



//  Require all the test files so tests execute
describe('\x1b[35m' + '#'.repeat(5) + '  TEST RUNNER ' + '#'.repeat(5) + '\x1b[0m\n', () => {
    console.log('\x1b[31mTODO:\x1b[37m write tests\x1b[0m');

    describe('\x1b[35m' + '-'.repeat(20) + ' INITIALIZERS ' + '-'.repeat(20) + '\x1b[0m', () => {
        //  Initializer tests
        // require("./initialize.spec");
    });


    describe('\x1b[35m' + '-'.repeat(20) + ' INDEX ' + '-'.repeat(20) + '\x1b[0m', () => {
        //  Index tests
        // require('./index/hoyts.spec.js');
    });
    
    
    describe('\x1b[35m' + '-'.repeat(20) + ' HELPERS ' + '-'.repeat(20) + '\x1b[0m', () => {
        //  Helper tests
        // require('./helpers/helpers.spec.js');
    });
    
    describe('\x1b[35m' + '-'.repeat(20) + ' API CLIENTS ' + '-'.repeat(20) + '\x1b[0m', () => {
        //  API Client tests
    
    });
});
