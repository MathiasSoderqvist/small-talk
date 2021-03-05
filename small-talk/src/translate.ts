import * as vscode from 'vscode';
// eslint-disable-next-line @typescript-eslint/naming-convention
import { v2 } from '@google-cloud/translate';
import flags from './flags';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Translate } = v2;
const projectId = 'translate-306709';

// Instantiates a client
const translator = new Translate({ projectId }); //google cloud platform service id number

// Translate info message function
export async function translateThis(language: 'es' | 'se') {
  //active editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    //get selected text
    const selected = document.getText(selection);
    
    //status bar message
    vscode.window.setStatusBarMessage('Translating..');

    //translate request
      let [translation] = await translator.translate(selected, language);
      console.log(translation);
      vscode.window.showInformationMessage(translation);
      vscode.window.setStatusBarMessage('Translated', 5000);
  }
}

//Translate into new comment function
export async function translateComment(language: 'es' | 'se', flag: 'es' | 'se') {
  //active editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    //get selected text
    const selected = document.getText(selection);
    
    //status bar message
    vscode.window.setStatusBarMessage('Translating..');
    //translate request
    let [translation] = await translator.translate(selected, language);
    console.log(translation);
    //position of cursor
    const position = editor.selection.active;	
    //execute command to insert translation in line below
    vscode.commands.executeCommand('editor.action.insertLineAfter').then(() => {	
      let line = editor.selection.active.line; //curr line number
      var lineObject = editor.document.lineAt(line);
      let character = lineObject.text.length;	//indentation	
      let insertion = editor.edit((editBuilder) => {						// the file is modified in the current position (where the new line was inserted) by inserting
        editBuilder.insert(new vscode.Position(line, character), `//${flags[flag]} ${translation}`);		// the input (option, a strng with the speech recognized) in inserted in the original line (above the code)
        });
    });
  }
}