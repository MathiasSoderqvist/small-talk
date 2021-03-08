import * as vscode from 'vscode';
// eslint-disable-next-line @typescript-eslint/naming-convention
import { v2 } from '@google-cloud/translate';
import flags from './flags';
import { settings } from 'node:cluster';
//process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/mathiassoderqvist/Documents/Code/Codeworks/Solo-Project/small-talk/small-talk/translate.json';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Translate } = v2;
const projectId = 'translate-306709';
// Instantiates a client
const translator = new Translate({ projectId }); //google cloud platform service id number

//Default language status bar translate func
export async function defaultTranslate(defaultLang: any) {
  //active editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    //get selected text
    const selected = document.getText(selection);
    //translate request
    let [translation] = await translator.translate(selected, defaultLang);
    console.log(translation);
    //position of cursor
    const position = editor.selection.active;	
    //execute command to insert translation in line below
    vscode.commands.executeCommand('editor.action.insertLineAfter').then(() => {	
      let line = editor.selection.active.line; //curr line number
      var lineObject = editor.document.lineAt(line);
      let character = lineObject.text.length;	//indentation	
      //insert flag (if available) and translation
      let insertion = editor.edit((code) => {					
        code.insert(new vscode.Position(line, character), `//${flags[defaultLang]} ${translation}`);		// ((line, indentation), translation)
        });
    });
  }
}