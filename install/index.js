var regedit = require('regedit')
var path = require('path');

var regPath = 'HKCR\\*\\shell\\Bookmark\\command';
var rootDirPath = path.dirname(__dirname);

var valueToPut = {}
valueToPut[regPath] = {
    '(Default)': {
        value: `"${path.join(rootDirPath, 'node.exe')}" "${path.join(rootDirPath, 'app.js')}" "%1"`,
        type: 'REG_DEFAULT'
    }
}

regedit.createKey(regPath, function(e){
    if(!e){
        regedit.putValue(valueToPut, function(err){
            console.log(err);
        })
    }else{
        console.log(e);
    }

});

