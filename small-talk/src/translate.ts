import * as vscode from 'vscode';
import { Translate } from '@google-cloud/translate';

const translator = new Translate({ projectId: 'small-talk-306023' }); //google cloud platform service id number

export async function translateThis(language: 'es' | 'se') {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const document = editor.document;
    const selection = editor.selection;

    //get selected text
    const selected = document.getText(selection);

    vscode.window.setStatusBarMessage('Translating..');
    const [translation] = await translator.translate(selected, language);
    console.log(translation);
    vscode.window.showInformationMessage(translation);
    vscode.window.setStatusBarMessage('Translated!', 2000);
  }
}