const fs = require('fs');
const path = require('path');

const projectFolders = [];
const excludedFolders = ['node_modules'];

const getFolderInformations = (folder) => {
    let folderPath;
    let folderName;

    if (typeof folder === 'object') {
        folderPath = folder.path;
        folderName = folder.name;
    }

    if (typeof folder === 'string') {
        folderPath = folder;
        const parsedPath = path.parse(folder);
        folderName = parsedPath.name;
    }

    return { path: folderPath, name: folderName };
};

const folderParser = async (folder) => {
    const folderData = getFolderInformations(folder);

    if (excludedFolders.includes(folderData.name)) return null;

    const files = await fs.readdirSync(folderData.path);

    for (const file of files) {
        const filePath = path.join(folderData.path, file);
        try {

            const stats = await fs.statSync(filePath);

            if (stats === undefined) {
                console.log('UNDEFINED stats', filePath);
                console.log('existsSync', fs.existsSync(filePath));
            }
            if (stats.isFile()) {
                if (['docker-compose.yml'].includes(file)) {
                    projectFolders.push(folderData);
                }
            }

            if (stats.isDirectory()) {
                await folderParser(filePath);
            }
        } catch (err) {
            console.log('file error', filePath);
            console.log(err);
            return;
        }
    }

    return projectFolders;
}

module.exports = folderParser;