Info 0    [00:00:23.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/a.ts]
export class a { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/tsconfig.json]
{"watchOptions":{"watchFactory":"myplugin"}}

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
          "watchFactory": "myplugin2"
        }
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:25.000] Host watch options changed to {"watchFactory":"myplugin2"}, it will be take effect for next watches.
Info 3    [00:00:26.000] response:
    {"seq":0,"type":"response","command":"configure","request_seq":1,"success":true}
Info 4    [00:00:27.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 5    [00:00:28.000] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "myplugin",
        "configuration": {
          "init": "initialConfig"
        }
      },
      "seq": 2,
      "type": "request"
    }
Info 6    [00:00:29.000] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":2,"success":true}
Info 7    [00:00:30.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 8    [00:00:31.000] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "myplugin2",
        "configuration": {
          "init2": "initialConfig2"
        }
      },
      "seq": 3,
      "type": "request"
    }
Info 9    [00:00:32.000] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":3,"success":true}
Info 10   [00:00:33.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 11   [00:00:34.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/a.ts"
      },
      "seq": 4,
      "type": "request"
    }
Info 12   [00:00:35.000] Search path: /user/username/projects/myproject
Info 13   [00:00:36.000] For info: /user/username/projects/myproject/a.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 14   [00:00:37.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 15   [00:00:38.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin2"} Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
CustomRequire:: Resolving myplugin2 from /a/pluginprobe1/node_modules
Require:: Module myplugin2 created with config: {"init2":"initialConfig2","name":"myplugin2"} and options: {"watchFactory":"myplugin2"}
Custom myplugin2watchFile: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin2"}
Info 16   [00:00:39.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a.ts",
  "/user/username/projects/myproject/b.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 },
 "watchOptions": {
  "watchFactory": "myplugin"
 }
}
Info 17   [00:00:40.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin2"} Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 18   [00:00:41.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin"} Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 19   [00:00:42.000] Local plugin loading enabled; adding /user/username/projects/myproject to search paths
CustomRequire:: Resolving myplugin from /user/username/projects/myproject/node_modules
Require:: Module myplugin created with config: {"init":"initialConfig","name":"myplugin"} and options: {"watchFactory":"myplugin"}
Custom watchFile: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":"myplugin"}
Info 20   [00:00:43.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Custom watchDirectory: /user/username/projects/myproject true {"watchFactory":"myplugin"}
Info 21   [00:00:44.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 22   [00:00:45.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 500 {"watchFactory":"myplugin2"} WatchType: Closed Script info
Custom myplugin2watchFile: /user/username/projects/myproject/b.ts 500 {"watchFactory":"myplugin2"}
Info 23   [00:00:46.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 24   [00:00:47.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 {"watchFactory":"myplugin2"} WatchType: Closed Script info
Custom myplugin2watchFile: /a/lib/lib.d.ts 500 {"watchFactory":"myplugin2"}
Info 25   [00:00:48.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":"myplugin"} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Custom watchDirectory: /user/username/projects/myproject/node_modules/@types true {"watchFactory":"myplugin"}
Info 26   [00:00:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":"myplugin"} Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 27   [00:00:50.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 28   [00:00:51.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 29   [00:00:52.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-1 "export class b { prop = \"hello\"; foo() { return this.prop; } }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'

Info 30   [00:00:53.000] -----------------------------------------------
Info 31   [00:00:54.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 31   [00:00:55.000] 	Files (3)

Info 31   [00:00:56.000] -----------------------------------------------
Info 31   [00:00:57.000] Open files: 
Info 31   [00:00:58.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 31   [00:00:59.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 31   [00:01:00.000] response:
    {
      "responseRequired": false
    }
After request


Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000,"options":{"watchFactory":"myplugin"}}

WatchedDirectories:Recursive::
/user/username/projects/myproject: *new*
  {"options":{"watchFactory":"myplugin"}}
/user/username/projects/myproject/node_modules/@types: *new*
  {"options":{"watchFactory":"myplugin"}}


myplugin2Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/b.ts: *new*
  {"pollingInterval":500,"options":{"watchFactory":"myplugin2"}}
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500,"options":{"watchFactory":"myplugin2"}}

Info 32   [00:01:01.000] Add a file
Checking timeout queue length: 0
//// [/user/username/projects/myproject/c.ts]
export class a { prop = "hello"; foo() { return this.prop; } }


Info 33   [00:01:04.000] Invoke plugin watches
Info 34   [00:01:05.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/c.ts :: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 35   [00:01:06.000] Scheduled: /user/username/projects/myproject/tsconfig.json
Info 36   [00:01:07.000] Scheduled: *ensureProjectForOpenFiles*
Info 37   [00:01:08.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/c.ts :: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":"myplugin"} Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Before running timeout callbacks

Info 38   [00:01:09.000] Running: /user/username/projects/myproject/tsconfig.json
Info 39   [00:01:10.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c.ts 500 {"watchFactory":"myplugin2"} WatchType: Closed Script info
Custom myplugin2watchFile: /user/username/projects/myproject/c.ts 500 {"watchFactory":"myplugin2"}
Info 40   [00:01:11.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 41   [00:01:12.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 42   [00:01:13.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 43   [00:01:14.000] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-1 "export class b { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/c.ts Text-1 "export class a { prop = \"hello\"; foo() { return this.prop; } }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'
	b.ts
	  Matched by default include pattern '**/*'
	c.ts
	  Matched by default include pattern '**/*'

Info 44   [00:01:15.000] -----------------------------------------------
Info 45   [00:01:16.000] Running: *ensureProjectForOpenFiles*
Info 46   [00:01:17.000] Before ensureProjectForOpenFiles:
Info 47   [00:01:18.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 47   [00:01:19.000] 	Files (4)

Info 47   [00:01:20.000] -----------------------------------------------
Info 47   [00:01:21.000] Open files: 
Info 47   [00:01:22.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 47   [00:01:23.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 47   [00:01:24.000] After ensureProjectForOpenFiles:
Info 48   [00:01:25.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 48   [00:01:26.000] 	Files (4)

Info 48   [00:01:27.000] -----------------------------------------------
Info 48   [00:01:28.000] Open files: 
Info 48   [00:01:29.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 48   [00:01:30.000] 		Projects: /user/username/projects/myproject/tsconfig.json
After running timeout callbacks


myplugin2Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/b.ts:
  {"pollingInterval":500,"options":{"watchFactory":"myplugin2"}}
/a/lib/lib.d.ts:
  {"pollingInterval":500,"options":{"watchFactory":"myplugin2"}}
/user/username/projects/myproject/c.ts: *new*
  {"pollingInterval":500,"options":{"watchFactory":"myplugin2"}}

Info 48   [00:01:31.000] Change file
Checking timeout queue length: 0
//// [/user/username/projects/myproject/b.ts]
export class a { prop = "hello"; foo() { return this.prop; } }


Info 49   [00:01:35.000] Invoke plugin watches
Info 50   [00:01:36.000] FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 500 {"watchFactory":"myplugin2"} WatchType: Closed Script info
Info 51   [00:01:37.000] Scheduled: /user/username/projects/myproject/tsconfig.json
Info 52   [00:01:38.000] Scheduled: *ensureProjectForOpenFiles*
Info 53   [00:01:39.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 500 {"watchFactory":"myplugin2"} WatchType: Closed Script info
Before running timeout callbacks

Info 54   [00:01:40.000] Running: /user/username/projects/myproject/tsconfig.json
Info 55   [00:01:41.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 56   [00:01:42.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 57   [00:01:43.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 58   [00:01:44.000] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a.ts SVC-1-0 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/b.ts Text-2 "export class a { prop = \"hello\"; foo() { return this.prop; } }"
	/user/username/projects/myproject/c.ts Text-1 "export class a { prop = \"hello\"; foo() { return this.prop; } }"

Info 59   [00:01:45.000] -----------------------------------------------
Info 60   [00:01:46.000] Running: *ensureProjectForOpenFiles*
Info 61   [00:01:47.000] Before ensureProjectForOpenFiles:
Info 62   [00:01:48.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 62   [00:01:49.000] 	Files (4)

Info 62   [00:01:50.000] -----------------------------------------------
Info 62   [00:01:51.000] Open files: 
Info 62   [00:01:52.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 62   [00:01:53.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 62   [00:01:54.000] After ensureProjectForOpenFiles:
Info 63   [00:01:55.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 63   [00:01:56.000] 	Files (4)

Info 63   [00:01:57.000] -----------------------------------------------
Info 63   [00:01:58.000] Open files: 
Info 63   [00:01:59.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 63   [00:02:00.000] 		Projects: /user/username/projects/myproject/tsconfig.json
After running timeout callbacks

Before request

Info 63   [00:02:01.000] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "myplugin",
        "configuration": {
          "extraData": "myData"
        }
      },
      "seq": 5,
      "type": "request"
    }
Custom:: onConfigurationChanged:: {"extraData":"myData"}
Info 64   [00:02:02.000] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":5,"success":true,"performanceData":{"updateGraphDurationMs":*}}
Info 65   [00:02:03.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 66   [00:02:04.000] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "myplugin2",
        "configuration": {
          "extraData": "myData"
        }
      },
      "seq": 6,
      "type": "request"
    }
Custom:: myplugin2onConfigurationChanged:: {"extraData":"myData"}
Info 67   [00:02:05.000] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":6,"success":true,"performanceData":{"updateGraphDurationMs":*}}
Info 68   [00:02:06.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 69   [00:02:07.000] request:
    {
      "command": "configurePlugin",
      "arguments": {
        "pluginName": "randomplugin",
        "configuration": {
          "extraData": "myData"
        }
      },
      "seq": 7,
      "type": "request"
    }
Info 70   [00:02:08.000] response:
    {"seq":0,"type":"response","command":"configurePlugin","request_seq":7,"success":true,"performanceData":{"updateGraphDurationMs":*}}
Info 71   [00:02:09.000] response:
    {
      "responseRequired": false
    }
After request
