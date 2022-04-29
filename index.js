#!/usr/bin/env node

// import fs from 'fs'
// import { dirname } from 'path'
// import { fileURLToPath } from 'url'


// const { dirname }  = require('path')
// const { fileURLToPath } = require(fs)

function main() {
    //console.log('sadfsadfsadf')
    var fs = require('fs')

    // if (!fs.existsSync('package.json')) {
    //     console.log('package.json not found,Please run "npm init" at first.')
    //     return
    // }

    fs.appendFileSync('123.txt', __dirname)
    fs.appendFileSync('123.txt', __filename)
    // fs.appendFileSync('123.txt', dirname(fileURLToPath(import.meta.url)))
    //console.log(dirname(fileURLToPath(import.meta.url)))

    //创建文件结构
    // if (!fs.existsSync('src/index.ts')) {
    //     fs.copyFileSync('src')
    // }
}

main()