declare module 'appdirectory' {
	export enum AppPlatform {
		Aix = 'aix',
		Android = 'android',
		Darwin = 'darwin',
		FreeBSD = 'freebsd',
		Linux = 'linux',
		OpenBSD = 'openbsd',
		SunOS = 'sunos',
		Win32 = 'win32',
		CygWin = 'cygwin',
		NetBSD = 'netbsd'
	}

	export interface AppDirectoryOptions {
		appName: string,
		appAuthor: string,
		appVersion: string,
		useRoaming: boolean,
		platform: AppPlatform
	}

	class AppDirectory {
		constructor(appName: string);
		constructor(options: AppDirectoryOptions);

		/**
		 * e.g. /home/awesomeuser/Library/Application Support/mycoolapp on Macs
		 */
		userData(): string;

		/**
		 * e.g. /home/awesomeuser/.config/mycoolapp on linux etc.
		 */
		userConfig(): string;

		/**
		 * e.g. C:\Users\awesomeuser\AppData\Local\mycoolapp\mycoolapp\Cache on Windows 7 (and Vista, I believe)
		 */
		userCache(): string;

		/**
		 * e.g. /home/awesomeuser/.cache/mycoolapp/log
		 */
		userLogs(): string;
	}

	export default AppDirectory;
}
