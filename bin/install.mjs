#!/usr/bin/env node
import { promisify } from "util";
import cp from "child_process";
import path from "path";
import fs, { existsSync, mkdirSync } from "fs";
// cli spinners
import ora from "ora";

// convert libs to promises
const exec = promisify(cp.exec);
const rm = promisify(fs.rm);

// check if user provided a folder name
if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-coelhojs-app my-new-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/PCoelho06/coelhojs.git";

// create project directory if don't already exists
if (fs.existsSync(projectPath)) {
  console.log(
    `The folder ${projectName} already exists in the current directory, please give it another name.`
  );
  process.exit(1);
} else {
  fs.mkdirSync(projectPath);
}

try {
  const gitSpinner = ora("Downloading files...").start();
  // clone the repo into the project folder -> creates the new boilerplate
  await exec(`git clone --depth 1 ${git_repo} ${projectPath} --quiet`);
  gitSpinner.succeed();

  const cleanSpinner = ora("Removing useless files").start();
  // remove my git history
  const rmGit = rm(path.join(projectPath, ".git"), {
    recursive: true,
    force: true,
  });
  // remove the installation file
  const rmBin = rm(path.join(projectPath, "bin"), {
    recursive: true,
    force: true,
  });
  await Promise.all([rmGit, rmBin]);

  process.chdir(projectPath);
  // remove the packages needed for cli
  await exec("npm uninstall ora cli-spinners");
  cleanSpinner.succeed();

  const npmSpinner = ora("Installing dependencies...").start();
  await exec("npm install");
  //await exec("npm install coelhojs-cli -g");
  npmSpinner.succeed();

  const folderSpinner = ora("Creating necessary folders...").start();
  const controllersDir = path.join(process.cwd(), "controllers");
  const servicesDir = path.join(process.cwd(), "services");
  const middlewaresDir = path.join(process.cwd(), "middlewares");
  const logsDir = path.join(process.cwd(), "logs");
  const dirs = [controllersDir, servicesDir, middlewaresDir, logsDir];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
  folderSpinner.succeed();

  console.log("Congratulations, CoelhoJS is now installed!");
  console.log(
    "Don't forget to update the .config.js file with your database credentials."
  );
  console.log("You can then run your app with:");
  console.log(`    cd ${projectName}`);
  console.log(`    npm run start`);
} catch (error) {
  // clean up in case of error, so the user does not have to do it manually
  fs.rmSync(projectPath, { recursive: true, force: true });
  console.log(error);
}
