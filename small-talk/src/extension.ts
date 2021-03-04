// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { translateThis } from './translate';

let myStatusBarItem: vscode.StatusBarItem; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "small-talk" is now active!');

	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	subscriptions.push(vscode.commands.registerCommand('small-talk.statusBarClick', () => {
	
	//show button on vs code load
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.command = 'small-talk.statusBarClick';
	subscriptions.push(myStatusBarItem);

		// Display a message box to the user
		vscode.window.showInformationMessage('Ready to translate :)');

		updateStatusBarItem();
	})
	);

	subscriptions.push(
		vscode.commands.registerCommand('small-talk.translateSpanish', () => {
			translateThis('es');
		})
	);
}

//status bar default language translate
function updateStatusBarItem(): void {
	myStatusBarItem.text = `$(word-wrap) Translate`;
	
	myStatusBarItem.show();
}

// this method is called when your extension is deactivated
export function deactivate() {}
