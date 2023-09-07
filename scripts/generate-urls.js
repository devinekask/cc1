import fs from "fs/promises";
import path from "path";

const codesandbox_base_url = "https://codesandbox.io/s/github/devinekask/cc1/tree/main/";
const github_base_url = "https://github.com/devinekask/cc1";

const getUrls = async () => {
  // eslint-disable-next-line no-undef
  const currentDir = process.cwd();
  const urls = {};

  try {
    const files = await fs.readdir(currentDir);

    for (const file of files) {

      if (!file.match("^[0-9]")) {
        continue;
      }

      urls[file] = {};
      await addUrls(urls, file, currentDir, "demos");
      await addUrls(urls, file, currentDir, "exercises");
    }

    return urls;

  } catch (error) {
    console.error(`An error occurred while getting folders: ${error}`);
  }
};

async function addUrls(urls, file, currentDir, folderName) {

  const pathToFolder = path.join(currentDir, file, folderName);

  try {
    const demoFolders = await fs.readdir(pathToFolder);

    if (!demoFolders) return;

    urls[file][folderName] = [];

    for (const demoFolder of demoFolders) {
      urls[file][folderName].push(
        {
          "name": demoFolder,
          "sandbox": `${codesandbox_base_url}${file}/demos/${demoFolder}`,
          "github": `${github_base_url}/tree/main/${file}/demos/${demoFolder}/js/script.js`,
          "relativePath": `./${file}/${folderName}/${demoFolder}`
        }
      );
    };
  } catch (error) {
    console.error(`An error occurred while getting folders: ${error}`);
  }

}

const init = async () => {

  const urls = await getUrls();
  const jsonContent = JSON.stringify(urls);
  const jsonFileName = "urls.json";

  fs.writeFile(jsonFileName, jsonContent)
    .then(() => console.log(`URLs saved to ${jsonFileName} `))
    .catch((error) => console.error(`An error occurred while writing JSON file: ${error} `));
};

init();