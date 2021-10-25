# Fragen zu Versioning in Webpack Module Federation

## requiredVersion vs. version

Ich habe das Gefühl, dass es in sehr vielen Szenarien egal ist, ob man ``requiredVersion`` oder ``version`` verwendet. Warum hat man sich entschieden, hier zwei Properties einzuführen? 

Wann würde man ``requiredVersion`` nutzen?

Wann würde man ``version`` nutzen?


## Singleton

Sehe ich das richtig: Wenn ich in einer Anwendung einen Singleton definiere, sollte diese shared Library auch in allen Anderen Anwendungen ein Singleton sein.


## Eager und statische Imports

### Konfiguration

Shell nutzt folgende Konfiguration:

```
shared: { 
    "rxjs": "rxjs", 
    "useless-lib": {
        eager: true
    }
}
```

Shell importiert useless-lib über einen statischen Import:

```
import * as useless_static from 'useless-lib';

console.debug('useless_static', useless_static.version);
```

### Ergebnis

```
main.js:950 Uncaught Error: Shared module is not available for eager consumption: webpack/sharing/consume/default/useless-lib/useless-lib
    at Object.__webpack_modules__.<computed> (main.js:950)
    at __webpack_require__ (main.js:542)
    at eval (main.ts:2)
    at Module../src/main.ts (main.js:195)
    at __webpack_require__ (main.js:542)
    at main.js:1087
    at main.js:1091
```

### Fragen

Ist das ein Bug und/oder mache ich hier was falsch?


## 2 Container + Singletons

Derzeit scheint es, als ob Singletons Container-übergreifend gelten. 

Ist das so gewollt oder ein Bug?

Nachfolgend eine Beschreibung meines Experiments dazu.

### Konfiguration

- Shell
  - useless-lib: ^1.0.0*
  - singleton: true
  - container: default*

- Mfe1
  - useless-lib: ^1.0.1*
  - singleton: true
  - container: default*

- Mfe2
  - useless-lib: ^2.0.0*
  - singleton: true
  - container: other

- Mfe3
  - useless-lib: ^2.0.1*
  - singleton: true
  - container: other

\* Nicht in ``webpack.config.json`` konfiguriert, sondern Standardwert bzw. Version in ``package.json`` hinterlegt.

### Ergebnis

- Alle nutzen Version 2.0.1
- Es kommt für Shell und mfe1 eine Singleton-Warnung

### Fragen

- Ist das so gewollt?
- Sollten Singletons pro Container gelten oder wirklich über alle Container hinweg?

### Variation

Wenn man überall ``singleton:true`` weglässt, nutzt der eine Container Version ``1.0.1`` und der andere Version ``2.0.1``.

## Strict Version ohne Singleton

Macht ``strictVersion:true`` ohne ``singleton:true`` Sinn? 

Ich sehe derzeit keinen Effekt.