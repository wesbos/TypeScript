Info 0    [00:00:23.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/a.ts]
export class a { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/tsconfig.json]
{}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info 1    [00:00:24.000] request:
    {
      "command": "configure",
      "arguments": {
        "watchOptions": {
          "watchFactory": "myplugin/../malicious"
        }
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:25.000] Host watch options changed to {}, it will be take effect for next watches.
Info 3    [00:00:26.000] Watch options supplied had errors: Supplied options: {"watchFactory":"myplugin/../malicious"}
Info 4    [00:00:27.000] Diagnostics:: error TS5107: 'watchFactory' name can only be a package name.

Info 5    [00:00:28.000] response:
    {"seq":0,"type":"response","command":"configure","request_seq":1,"success":true}
Info 6    [00:00:29.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 7    [00:00:30.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/a.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info 8    [00:00:31.000] Search path: /user/username/projects/myproject
Info 9    [00:00:32.000] For info: /user/username/projects/myproject/a.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 10   [00:00:33.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 11   [00:00:34.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {} Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 12   [00:00:35.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a.ts",
  "/user/username/projects/myproject/b.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info 13   [00:00:36.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 14   [00:00:37.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 15   [00:00:38.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 500 {} WatchType: Closed Script info
Info 16   [00:00:39.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 17   [00:00:40.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 {} WatchType: Closed Script info
Info 18   [00:00:41.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 19   [00:00:42.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 20   [00:00:43.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 21   [00:00:44.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 22   [00:00:45.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-1 "export class b { prop = \"hello\"; foo() { return this.prop; } }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'

Info 23   [00:00:46.000] -----------------------------------------------
Info 24   [00:00:47.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 24   [00:00:48.000] 	Files (3)

Info 24   [00:00:49.000] -----------------------------------------------
Info 24   [00:00:50.000] Open files: 
Info 24   [00:00:51.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 24   [00:00:52.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 24   [00:00:53.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json: *new*
  {}
/user/username/projects/myproject/b.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Info 25   [00:00:54.000] Change file
Info 26   [00:00:58.000] FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 500 {} WatchType: Closed Script info
Info 27   [00:00:59.000] Scheduled: /user/username/projects/myproject/tsconfig.json
Info 28   [00:01:00.000] Scheduled: *ensureProjectForOpenFiles*
Info 29   [00:01:01.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 500 {} WatchType: Closed Script info
Before running timeout callbacks
//// [/user/username/projects/myproject/b.ts]
export class a { prop = "hello"; foo() { return this.prop; } }


Info 30   [00:01:02.000] Running: /user/username/projects/myproject/tsconfig.json
Info 31   [00:01:03.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 32   [00:01:04.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 33   [00:01:05.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 34   [00:01:06.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-2 "export class a { prop = \"hello\"; foo() { return this.prop; } }"

Info 35   [00:01:07.000] -----------------------------------------------
Info 36   [00:01:08.000] Running: *ensureProjectForOpenFiles*
Info 37   [00:01:09.000] Before ensureProjectForOpenFiles:
Info 38   [00:01:10.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 38   [00:01:11.000] 	Files (3)

Info 38   [00:01:12.000] -----------------------------------------------
Info 38   [00:01:13.000] Open files: 
Info 38   [00:01:14.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 38   [00:01:15.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 38   [00:01:16.000] After ensureProjectForOpenFiles:
Info 39   [00:01:17.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 39   [00:01:18.000] 	Files (3)

Info 39   [00:01:19.000] -----------------------------------------------
Info 39   [00:01:20.000] Open files: 
Info 39   [00:01:21.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 39   [00:01:22.000] 		Projects: /user/username/projects/myproject/tsconfig.json
After running timeout callbacks
