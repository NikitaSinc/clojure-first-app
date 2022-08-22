
shadow.cljs.devtools.client.env.module_loaded('frontend');

try { frontend.app.init(); } catch (e) { console.error("An error occurred when calling (frontend.app/init)"); throw(e); }