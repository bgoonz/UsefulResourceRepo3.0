➜  web-guided-project-dom-2 git:(main) npm install

> deasync@0.1.19 install /home/waywardpooch/code/lambdaProjects/unit2/sprint1/web-guided-project-dom-2/node_modules/deasync
> node ./build.js

make: Entering directory '/home/waywardpooch/code/lambdaProjects/unit2/sprint1/web-guided-project-dom-2/node_modules/deasync/build'
  CXX(target) Release/obj.target/deasync/src/deasync.o
make: g++: No such file or directory
make: *** [deasync.target.mk:107: Release/obj.target/deasync/src/deasync.o] Error 127
make: Leaving directory '/home/waywardpooch/code/lambdaProjects/unit2/sprint1/web-guided-project-dom-2/node_modules/deasync/build'
gyp ERR! build error 
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/usr/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Linux 5.13.12-200.fc34.x86_64
gyp ERR! command "/usr/bin/node" "/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /home/waywardpooch/code/lambdaProjects/unit2/sprint1/web-guided-project-dom-2/node_modules/deasync
gyp ERR! node -v v14.17.0
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
Build failed
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! deasync@0.1.19 install: `node ./build.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the deasync@0.1.19 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/waywardpooch/.npm/_logs/2021-08-31T15_19_01_938Z-debug.log