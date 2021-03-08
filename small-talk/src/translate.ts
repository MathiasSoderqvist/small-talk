import * as vscode from 'vscode';
// eslint-disable-next-line @typescript-eslint/naming-convention
import { v2 } from '@google-cloud/translate';
import flags from './flags';
process.env.GOOGLE_APPLICATION_CREDENTIALS = './translate.json';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Translate } = v2;
const projectId = 'translate-306709';

// Instantiates a client
const translator = new Translate({ projectId }); //google cloud platform service id number

// Translate info message function
export async function translateThis(language: 'af' | 'sq' | 'am' | 'ar' | 'hy' | 'az' | 'eu' | 'be' | 'bn' | 'bs' | 'bg' | 'ca' | 'ceb' | 'zh-CN' | 'zh-TW' | 'co' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'eo' | 'et' | 'fi' | 'fr' | 'fy' | 'gl' | 'ka' | 'de' | 'el' | 'gu' | 'ht' | 'ha' | 'haw' | 'he' | 'hi' | 'hmg' | 'hu' | 'is' | 'ig' | 'id' | 'ga' | 'it' | 'ja' | 'jv' | 'kn' | 'kk' | 'km' | 'rw' | 'ko' | 'ku' | 'ky' | 'lo' | 'la' | 'lv' | 'lt' | 'lb' | 'mk' | 'mg' | 'ms' | 'ml' | 'mt' | 'mi' | 'mr' | 'mn' | 'my' | 'ne' | 'no' | 'ny' | 'or' | 'ps' | 'fa' | 'pl' | 'pt' | 'pa' | 'ro' | 'ru' | 'sm' | 'gd' | 'sr' | 'st' | 'sn' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'es' | 'su' | 'sw' | 'sv' | 'tl' | 'tg' | 'ta' | 'tt' | 'te' | 'th' | 'tr' | 'tk' | 'uk' | 'ur' | 'ug' | 'uz' | 'vi' | 'cy' | 'xh' | 'yi' | 'yo'| 'zu') {
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
      vscode.window.setStatusBarMessage('Translated');
  }
}

//Translate into new comment function
export async function translateComment(language: 'af' | 'sq' | 'am' | 'ar' | 'hy' | 'az' | 'eu' | 'be' | 'bn' | 'bs' | 'bg' | 'ca' | 'ceb' | 'zh-CN' | 'zh-TW' | 'co' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'eo' | 'et' | 'fi' | 'fr' | 'fy' | 'gl' | 'ka' | 'de' | 'el' | 'gu' | 'ht' | 'ha' | 'haw' | 'he' | 'hi' | 'hmg' | 'hu' | 'is' | 'ig' | 'id' | 'ga' | 'it' | 'ja' | 'jv' | 'kn' | 'kk' | 'km' | 'rw' | 'ko' | 'ku' | 'ky' | 'lo' | 'la' | 'lv' | 'lt' | 'lb' | 'mk' | 'mg' | 'ms' | 'ml' | 'mt' | 'mi' | 'mr' | 'mn' | 'my' | 'ne' | 'no' | 'ny' | 'or' | 'ps' | 'fa' | 'pl' | 'pt' | 'pa' | 'ro' | 'ru' | 'sm' | 'gd' | 'sr' | 'st' | 'sn' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'es' | 'su' | 'sw' | 'sv' | 'tl' | 'tg' | 'ta' | 'tt' | 'te' | 'th' | 'tr' | 'tk' | 'uk' | 'ur' | 'ug' | 'uz' | 'vi' | 'cy' | 'xh' | 'yi' | 'yo'| 'zu') {
  //active editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    //get selected text
    const selected = document.getText(selection);
    
    //status bar message
    vscode.window.setStatusBarMessage('Translating..', 3000);
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
      //insert flag (if available) and translation
      let insertion = editor.edit((code) => {					
        code.insert(new vscode.Position(line, character), `//${flags[language]} ${translation}`);		// ((line, indentation), translation)
        });
        vscode.window.setStatusBarMessage('Translated',  4000);
        vscode.window.setStatusBarMessage('Translate', 5000); //Bar message removed after 5 seconds
    });
  }
}


