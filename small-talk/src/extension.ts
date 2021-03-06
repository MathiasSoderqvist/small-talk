// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { config } from 'dotenv';
config();
import * as vscode from 'vscode';
import { translateThis, translateComment } from './translate';

let myStatusBarItem: vscode.StatusBarItem; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "small-talk" is now active!');
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// subscriptions.push(vscode.commands.registerCommand('small-talk.statusBarClick', () => {
	
	// //show button on vs code load
	// myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	// myStatusBarItem.command = 'small-talk.statusBarClick';
	// subscriptions.push(myStatusBarItem);

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Ready to translate :)');

	// 	updateStatusBarItem();
	// })
	// );

	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateAfrikaans', () => {
			translateThis('af');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentAfrikaans', () => {
		translateComment('af');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateAmharic', () => {
		translateThis('am');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentAmharic', () => {
		translateComment('am');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateArmenian', () => {
		translateThis('hy');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentArmenian', () => {
		translateComment('hy');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateAzerbaijani', () => {
		translateThis('az');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentAzerbaijani', () => {
		translateComment('az');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBasque', () => {
		translateThis('eu');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBasque', () => {
		translateComment('eu');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBelarusian', () => {
		translateThis('be');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBelarusian', () => {
		translateComment('be');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBengali', () => {
		translateThis('bn');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBengali', () => {
		translateComment('bn');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBosnian', () => {
		translateThis('bs');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBosnian', () => {
		translateComment('bs');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBulgarian', () => {
		translateThis('bg');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBulgarian', () => {
		translateComment('bg');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCatalan', () => {
		translateThis('ca');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentCatalan', () => {
		translateComment('ca');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCebuano', () => {
		translateThis('ceb');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentCebuano', () => {
		translateComment('ceb');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateChineseSimplified', () => {
		translateThis('zh-CN');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentChineseSimplified', () => {
		translateComment('zh-CN');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateChineseTraditional', () => {
		translateThis('zh-TW');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentChineseTraditional', () => {
		translateComment('zh-TW');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCorsican', () => {
		translateThis('co');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentCorsican', () => {
		translateComment('co');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCroatian', () => {
		translateThis('hr');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentCroatian', () => {
		translateComment('hr');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCzech', () => {
		translateThis('cs');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentCzech', () => {
		translateComment('cs');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateDanish', () => {
		translateThis('da');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentDanish', () => {
		translateComment('da');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateDutch', () => {
		translateThis('nl');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentDutch', () => {
		translateComment('nl');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateEnglish', () => {
		translateThis('en');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentEnglish', () => {
		translateComment('en');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateEsperanto', () => {
		translateThis('eo');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentEsperanto', () => {
		translateComment('eo');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateEstonian', () => {
		translateThis('et');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentEstonian', () => {
		translateComment('et');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateFinnish', () => {
		translateThis('fi');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentFinnish', () => {
		translateComment('fi');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateFrench', () => {
		translateThis('fr');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentFrench', () => {
		translateComment('fr');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateFrisian', () => {
		translateThis('fy');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentFrisian', () => {
		translateComment('fy');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateGalician', () => {
		translateThis('gl');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentGalician', () => {
		translateComment('gl');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateGeorgian', () => {
		translateThis('ka');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentGeorgian', () => {
		translateComment('ka');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateGerman', () => {
		translateThis('de');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentGerman', () => {
		translateComment('de');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateGreek', () => {
		translateThis('el');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentGreek', () => {
		translateComment('el');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateGujarati', () => {
		translateThis('gu');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentGujarati', () => {
		translateComment('gu');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHaitianCreole', () => {
		translateThis('ht');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHaitianCreole', () => {
		translateComment('ht');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHausa', () => {
		translateThis('ha');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHausa', () => {
		translateComment('ha');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHawaiian', () => {
		translateThis('haw');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHawaiian', () => {
		translateComment('haw');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHebrew', () => {
		translateThis('he');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHebrew', () => {
		translateComment('he');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHindi', () => {
		translateThis('hi');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHindi', () => {
		translateComment('hi');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHmong', () => {
		translateThis('hmg');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHmong', () => {
		translateComment('hmg');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateHungarian', () => {
		translateThis('hu');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentHungarian', () => {
		translateComment('hu');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateIcelandic', () => {
		translateThis('is');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentIcelandic', () => {
		translateComment('is');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateIgbo', () => {
		translateThis('ig');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentIgbo', () => {
		translateComment('ig');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateIndonesian', () => {
		translateThis('id');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentIndonesian', () => {
		translateComment('id');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateIrish', () => {
		translateThis('ga');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentIrish', () => {
		translateComment('ga');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateItalian', () => {
		translateThis('it');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentItalian', () => {
		translateComment('it');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateJapanese', () => {
		translateThis('ja');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentJapanese', () => {
		translateComment('ja');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateJavanese', () => {
		translateThis('jv');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentJavanese', () => {
		translateComment('jv');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKannada', () => {
		translateThis('kn');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKannada', () => {
		translateComment('kn');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKazakh', () => {
		translateThis('id');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKazakh', () => {
		translateComment('id');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKhmer', () => {
		translateThis('km');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKhmer', () => {
		translateComment('km');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKinyarwanda', () => {
		translateThis('rw');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKinyarwanda', () => {
		translateComment('rw');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKorean', () => {
		translateThis('ko');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKorean', () => {
		translateComment('ko');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKurdish', () => {
		translateThis('ku');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKurdish', () => {
		translateComment('ku');  
		})
	);
}

//status bar default language translate
// function updateStatusBarItem(): void {
// 	myStatusBarItem.text = `$(word-wrap) Translate`;
	
// 	myStatusBarItem.show();
// }

// this method is called when your extension is deactivated
export function deactivate() {}

