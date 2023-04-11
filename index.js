import inquirer from 'inquirer';
import { spawn } from 'child_process';


const files = ['index_001.js', 'index_002.js', 'index_003.js'];

const questions = [
  {
    type: 'list',
    name: 'file',
    message: 'Select a file to run:',
    choices: files
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(`Running ${answers.file}...`);

  const child = spawn('node', [answers.file]);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stderr.on('data', (data) => {
    console.error(data.toString());
  });
});
