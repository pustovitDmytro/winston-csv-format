# winston-csv-format
writes [winston][w-main] logs in [csv][csv] format.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Motivation
If you're struggling to format your logs/reports as [.csv][csv] files (or prepare import to Excel or Google Spreadsheet), this package can be a cure. Now you can use all power of [winston][w-main] logger, formating your data as comma-separated values.

## Requirements
[![Platform Status][appveyor-badge]][appveyor-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][appveyor-url] on darwin, linux, win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library run the following command

```bash
  npm i --save winston-csv-format
```

## Usage
The package can be used as the formatter alongside any [winston transport][w-transports]. Default export is a constructor function. It has 2 arguments: an array of fields and an options object. Note that fields must match keys of logged objects:

```javascript
import CSV from 'winston-csv-format';
import { createLogger, transports } from 'winston';

const csvHeaders = {
    created : 'Creation Date',
    size    : 'Size',
    status  : 'Status'
};

const logger = createLogger({
    level      : 'info',
    format     : CSV([ 'created', 'status' ], { delimiter: ',' }),
    transports : [ new transports.Console() ]
});

logger.log('info', csvHeaders); // write headers

```
## Configuration
Next values can be configured as options:
* **delimiter** - delimiter between fields (```';'``` by default)
* **missed** - value, used when original value is missed in the logged object (```empty string``` by default)

[w-main]: https://github.com/winstonjs/winston
[w-transports]: https://github.com/winstonjs/winston/blob/master/docs/transports.md
[csv]: https://en.wikipedia.org/wiki/Comma-separated_values

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/winston-csv-format
[github]: https://github.com/pustovitDmytro/winston-csv-format
[coveralls]: https://coveralls.io/github/pustovitDmytro/winston-csv-format?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/winston-csv-format.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/winston-csv-format.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/winston-csv-format.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/winston-csv-format.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/winston-csv-format/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/winston-csv-format?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/winston-csv-format
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/winston-csv-format

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-csv-format/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-csv-format

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/winston-csv-format

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-csv-format/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-csv-format/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/winston-csv-format.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/winston-csv-format/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/winston-csv-format.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/winston-csv-format/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/52f29d5fc1a447349a4ee5ce75857322
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/winston-csv-format/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/winston-csv-format&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_winston-csv-format&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_winston-csv-format

[npm-downloads-badge]: https://img.shields.io/npm/dw/winston-csv-format
[npm-size-badge]: https://img.shields.io/bundlephobia/min/winston-csv-format
[npm-size-url]: https://bundlephobia.com/result?p=winston-csv-format

[appveyor-badge]: https://ci.appveyor.com/api/projects/status/9ok28mb006a6welc/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/pustovitDmytro/winston-csv-format/branch/master

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fwinston-csv-format.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fwinston-csv-format?ref=badge_shield