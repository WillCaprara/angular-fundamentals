//We need to tell Angular how to actually bootstrap this...
//There are specific ways that we can bootstrap an angular application: on the server, on the client or we can precompile it because its an advanced topic.
//If we want to compile in the browser, we have to use something called browser-platform-dynamic. This actually contains the client side code that actually processes our templates, all of our bindings and allows us to do dependency injection.
//We need the -dynamic version which allows us to compile our app in the browser.
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);


