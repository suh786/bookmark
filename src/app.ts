import { BookmarkLogger } from './boolmarkLogger';
import * as fs from 'fs';
import * as path from 'path';

const logger = new BookmarkLogger();
logger.log("--------Launch--------")
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
logger.log(process.argv);

const fileQualifiedPath = process.argv[2];
const parsedFileName = path.parse(fileQualifiedPath);
const newFileQualifiedPathInfo = <path.ParsedPath>{
    dir: parsedFileName.dir,
    name: parsedFileName.name + "_WATCHED",
    ext: parsedFileName.ext
};
const newFileQualifiedPath = path.format(newFileQualifiedPathInfo);
logger.log(`New File Path: ${newFileQualifiedPath}`);

fs.rename(fileQualifiedPath, newFileQualifiedPath, (err: NodeJS.ErrnoException)=>{
    console.log(err);
});

console.log("Hello World");