# [Virtual World Sandbox][sandbox]

The ADL [Virtual World Sandbox][github] is an application based on the [Virtual World Framework][vwf] with multiplayer simulation and collaborative content authoring capabilities. The entirety of the application runs in native Javascript, so no plugins or installs are required. As such, the Sandbox is a no-install, game authoring environment and a game runtime environment, all in the browser. It is primarily build using NodeJS, Express, AngularJS, jQuery, and is database agnostic.

My role in this project has been very fluid. I was originally tasked redesigning the front facing website to support the Knockout.js MVVM framework and Mustache server side bindings. Then, I was later tasked with making a number of fixes and enhancements to the data access layer and other server side components. After that, I eventually began creating [Selenium tests][selenium] (via [webdriver.io][webdriver]) to ensure integrity of the system, especially with features that virtually all users rely on.

I'm currently working on a *very significant* refactor in the Sandbox's *massive* client side architecture to enable two-way data binding with AngularJS.

![Virtual World Sandbox Screenshot][screenshot]

## Role
* Full stack developer, part of larger team
* Created a number of integration tests with Selenium
* Frontend and backend bug fixes, enhancements, and refactoring

## Tech
* [NodeJS][node]
* [Express][express]
* [AngularJS][angular]

[vwf]: https://virtual.wf/
[sandbox]: https://sandbox.adlnet.gov/
[github]: https://github.com/adlnet/Sandbox
[screenshot]: ../../img/mars.png

[selenium]: https://virtual.wf/
[webdriver]: https://virtual.wf/

[node]: https://nodejs.org/
[express]: http://expressjs.com/
[angular]: https://angularjs.org/
