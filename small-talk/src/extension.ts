// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "small-talk" is now active!');
	const myCommandId = 'small-talk.statusBarClick';
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
	
	//show button on vs code load
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.command = myCommandId;
	subscriptions.push(myStatusBarItem);

		// Display a message box to the user
		vscode.window.showInformationMessage('Ready to translate :)');

		updateStatusBarItem();
	}));
}

//status bar default language translate
function updateStatusBarItem(): void {
	myStatusBarItem.text = `$(word-wrap) translate`;
	
	myStatusBarItem.show();
}

// this method is called when your extension is deactivated
export function deactivate() {}
