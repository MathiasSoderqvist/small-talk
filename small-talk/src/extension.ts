// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { config } from 'dotenv';
config();
import * as vscode from 'vscode';
import { translateThis, translateComment } from './translate';
import { defaultTranslate } from './statusBar';
import { contributes } from '../package.json';

class MyStatusBarItem {																				
	private statusBarItem: vscode.StatusBarItem;									
  
	constructor() {																				
	  this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);	
	  this.off();
	}
  
	on() {																						
	  this.statusBarItem.text = `$(check) Translated`;											
	  this.statusBarItem.show();																																													
	}
  
	off() {																						
	  this.statusBarItem.text = `$(word-wrap) Translate`;												
	  this.statusBarItem.show();																			
	}
	setCmd(cmd: string | undefined) {														
	  this.statusBarItem.command = 'small-talk.defaultLanguage';
	}
  }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "small-talk" is now active!');
	console.log(contributes.configuration.properties['small-talk.pathToConfig'].default, "KEEEEEEEY");
	let statusBarItem = new MyStatusBarItem();
	statusBarItem.setCmd('small-talk.defaultLanguage');
	const defaultLang = contributes.configuration.properties['small-talk.set-language'].default; //import correctly
	//default language translation from status bar button
	subscriptions.push(vscode.commands.registerCommand('small-talk.defaultLanguage', () => {
		defaultTranslate(defaultLang);
			statusBarItem.on();
			setTimeout(function () {
				statusBarItem.off();
			 }, 3000);
	})
	);

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
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateArabic', () => {
		translateThis('ar');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentArabic', () => {
		translateComment('ar');  
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
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateKyrgyz', () => {
		translateThis('ky');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentKyrgyz', () => {
		translateComment('ky');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateLao', () => {
		translateThis('lo');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentLao', () => {
		translateComment('lo');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateLatin', () => {
		translateThis('la');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentLatin', () => {
		translateComment('la');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateLatvian', () => {
		translateThis('lv');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentLatvian', () => {
		translateComment('lv');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateLithuanian', () => {
		translateThis('lt');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentLithuanian', () => {
		translateComment('lt');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateLuxembourgish', () => {
		translateThis('lb');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentLuxembourgish', () => {
		translateComment('lb');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMacedonian', () => {
		translateThis('mk');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMacedonian', () => {
		translateComment('mk');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMalagasy', () => {
		translateThis('mg');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMalagasy', () => {
		translateComment('mg');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMalay', () => {
		translateThis('ms');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMalay', () => {
		translateComment('ms');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMalayam', () => {
		translateThis('ml');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMalayam', () => {
		translateComment('ml');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMaltese', () => {
		translateThis('mt');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMaltese', () => {
		translateComment('mt');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMaori', () => {
		translateThis('mi');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMaori', () => {
		translateComment('mi');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMarati', () => {
		translateThis('mr');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMarati', () => {
		translateComment('mr');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateMongolian', () => {
		translateThis('mn');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentMongolian', () => {
		translateComment('mn');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateBurmese', () => {
		translateThis('my');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentBurmese', () => {
		translateComment('my');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateNepali', () => {
		translateThis('ne');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentNepali', () => {
		translateComment('ne');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateNorwegian', () => {
		translateThis('no');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentNorwegian', () => {
		translateComment('no');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateNyanja', () => {
		translateThis('ny');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentNyanja', () => {
		translateComment('ny');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateOdia', () => {
		translateThis('or');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentOdia', () => {
		translateComment('or');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translatePashto', () => {
		translateThis('ps');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentPashto', () => {
		translateComment('ps');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translatePersian', () => {
		translateThis('fa');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentPersian', () => {
		translateComment('fa');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translatePolish', () => {
		translateThis('pl');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentPolish', () => {
		translateComment('pl');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translatePortuguese', () => {
		translateThis('pt');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentPortuguese', () => {
		translateComment('pt');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translatePunjabi', () => {
		translateThis('pa');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentPunjabi', () => {
		translateComment('pa');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateRomanian', () => {
		translateThis('ro');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentRomanian', () => {
		translateComment('ro');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateRussian', () => {
		translateThis('ru');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentRussian', () => {
		translateComment('ru');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSamoan', () => {
		translateThis('sm');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSamoan', () => {
		translateComment('sm');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateScotsGaelic', () => {
		translateThis('gd');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentScotsGaelic', () => {
		translateComment('gd');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSerbian', () => {
		translateThis('sr');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSerbian', () => {
		translateComment('sr');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSesotho', () => {
		translateThis('st');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSesotho', () => {
		translateComment('st');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateShona', () => {
		translateThis('sn');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentShona', () => {
		translateComment('sn');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSindhi', () => {
		translateThis('sd');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSindhi', () => {
		translateComment('sd');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSinhalese', () => {
		translateThis('si');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSinhalese', () => {
		translateComment('si');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSlovak', () => {
		translateThis('sk');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSlovak', () => {
		translateComment('sk');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSlovenian', () => {
		translateThis('sl');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSlovenian', () => {
		translateComment('sl');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSomalian', () => {
		translateThis('so');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSomalian', () => {
		translateComment('so');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSpanish', () => {
		translateThis('es');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSpanish', () => {
		translateComment('es');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSwahili', () => {
		translateThis('sw');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSwahili', () => {
		translateComment('sw');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateSwedish', () => {
		translateThis('sv');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentSwedish', () => {
		translateComment('sv');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTagalog', () => {
		translateThis('tl');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTagalog', () => {
		translateComment('tl');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTajik', () => {
		translateThis('tg');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTajik', () => {
		translateComment('tg');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTamil', () => {
		translateThis('ta');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTamil', () => {
		translateComment('ta');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTatar', () => {
		translateThis('tt');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTatar', () => {
		translateComment('tt');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTelugu', () => {
		translateThis('te');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTelugu', () => {
		translateComment('te');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateThai', () => {
		translateThis('th');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentThai', () => {
		translateComment('th');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTurkish', () => {
		translateThis('tr');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTurkish', () => {
		translateComment('tr');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateTurkmen', () => {
		translateThis('tk');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentTurkmen', () => {
		translateComment('tk');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateUkrainian', () => {
		translateThis('uk');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentUkrainian', () => {
		translateComment('uk');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateUrdu', () => {
		translateThis('ur');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentUrdu', () => {
		translateComment('ur');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateUyghur', () => {
		translateThis('ug');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentUyghur', () => {
		translateComment('ug');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateUzbek', () => {
		translateThis('uz');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentUzbek', () => {
		translateComment('uz');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateVietnamese', () => {
		translateThis('vi');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentVietnamese', () => {
		translateComment('vi');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateWelsh', () => {
		translateThis('cy');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentWelsh', () => {
		translateComment('cy');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateXhosa', () => {
		translateThis('xh');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentXhosa', () => {
		translateComment('xh');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateYiddish', () => {
		translateThis('yi');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentYiddish', () => {
		translateComment('yi');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateYoruba', () => {
		translateThis('yo');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentYoruba', () => {
		translateComment('yo');  
		})
	);
	//translate to info message
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateZulu', () => {
		translateThis('zu');
		})
	);
	//translate to comment under current line
	subscriptions.push(vscode.commands.registerCommand('small-talk.translateCommentZulu', () => {
		translateComment('zu');  
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}

