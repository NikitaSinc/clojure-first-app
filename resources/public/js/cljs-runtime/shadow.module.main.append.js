
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.init(); } catch (e) { console.error("An error occurred when calling (app/init)"); throw(e); }