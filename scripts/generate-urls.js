import fs from "fs/promises";
import path from "path";

const base_url =
  "https://codesandbox.io/s/github/devinekask/web1-examples/tree/main/";

const generateUrls = async (directory) => {
  try {
    const urls = [];
    await traverseFolders(directory, urls);
    return urls;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    throw error;
  }
};

const traverseFolders = async (currentDir, urls) => {
  try {
    const files = await fs.readdir(currentDir);

    for (const file of files) {
      if (file.startsWith(".") || file === "node_modules") {
        continue;
      }
      const fullPath = path.join(currentDir, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        const urlPath = path.relative(directory, fullPath).replace(/\\/g, "/");
        const url = `${base_url}${urlPath}`;
        urls.push(url);
        console.log(`Generated URL: ${url}`);

        await traverseFolders(fullPath, urls, url);
      }
    }
  } catch (error) {
    console.error(`An error occurred while traversing folders: ${error}`);
  }
};

// eslint-disable-next-line no-undef
const directory = process.cwd();

generateUrls(directory)
  .then((generatedUrls) => {
    const jsonContent = JSON.stringify(generatedUrls);
    const jsonFileName = "urls.json";

    fs.writeFile(jsonFileName, jsonContent)
      .then(() => {
        console.log(`URLs saved to ${jsonFileName}`);
      })
      .catch((error) => {
        console.error(`An error occurred while writing JSON file: ${error}`);
      });
  })
  .catch((error) => {
    console.error(`An error occurred: ${error}`);
  });
