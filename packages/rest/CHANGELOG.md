# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.0 (2021-01-19)


### ⚠ 💥 BREAKING CHANGES

* Resources will resolve with any nested
entities from their schemas, rather than the `pk` of those
entities

### 🚀 Features

* Add @rest-hooks/rest package ([#375](https://github.com/coinbase/rest-hooks/issues/375)) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125d3396ebbb8514aea6fc80b4dfceb0da27))
* Add RestEndpoint type ([#427](https://github.com/coinbase/rest-hooks/issues/427)) ([dc47667](https://github.com/coinbase/rest-hooks/commit/dc47667cca768d16f3c11e42af5daf8cfa1c2fcf))
* Re-export normalizr from 'rest' lib ([4362686](https://github.com/coinbase/rest-hooks/commit/436268601a482e2358d873f8aa1a1c1eecc6f652))
* Resources can have nested entities ([#469](https://github.com/coinbase/rest-hooks/issues/469)) ([4eeeaae](https://github.com/coinbase/rest-hooks/commit/4eeeaae1026715be4e72a66cd94d81934f2b0ce7))
* Simple AbortController integration ([#392](https://github.com/coinbase/rest-hooks/issues/392)) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563deccaccc214c3504b91b96e1460ddfab2f))
* Support extra endpoint members and inheritance ([#387](https://github.com/coinbase/rest-hooks/issues/387)) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486b6e333d8721b74fd4fb1b7ed783461435))


### 💅 Enhancement

* Keep legacy Resource ([#376](https://github.com/coinbase/rest-hooks/issues/376)) ([fdd1f7c](https://github.com/coinbase/rest-hooks/commit/fdd1f7cd276871d1f92e2a7bd17118a3e6df12e9))
* Memoize Resource endpoints ([#390](https://github.com/coinbase/rest-hooks/issues/390)) ([67bc90f](https://github.com/coinbase/rest-hooks/commit/67bc90f1417bc11f2836574e92618439b6289b22))
* Remove Readonly on Resource endpoint schemas ([#468](https://github.com/coinbase/rest-hooks/issues/468)) ([0b98987](https://github.com/coinbase/rest-hooks/commit/0b989872d2712c92114061b541cdf74f51ed189d))
* Simplify endpoint memoization and provide new extensions ([#391](https://github.com/coinbase/rest-hooks/issues/391)) ([d874d0b](https://github.com/coinbase/rest-hooks/commit/d874d0b3e6433a616d2dbecd8076715f5caefaeb))
* Widen RestFetch types to make overriding not break ([#479](https://github.com/coinbase/rest-hooks/issues/479)) ([2bccf12](https://github.com/coinbase/rest-hooks/commit/2bccf12f7892ccbc1d342bd529b3659c2935fb71))


### 🐛 Bug Fix

* Handle entities updated with new indexes ([#384](https://github.com/coinbase/rest-hooks/issues/384)) ([2ee3bb6](https://github.com/coinbase/rest-hooks/commit/2ee3bb60217bed1f91a6d3d086b354ce151b8e0c))
* Infer useFetcher() has no body when not present in fetch ([#385](https://github.com/coinbase/rest-hooks/issues/385)) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd3995c519e1990f2388b6365494cec873d04a))
* Resource endpoint memoization ([744431e](https://github.com/coinbase/rest-hooks/commit/744431ef435dfab1969cd883f01b6a4b50b6c75d))
* TypeScript 4 compatibility ([#406](https://github.com/coinbase/rest-hooks/issues/406)) ([5d82e24](https://github.com/coinbase/rest-hooks/commit/5d82e2416b68992f6efccb63f694010ef1ea28e8))


### 📦 Package

* Rely on latest endpoint ([801f5e7](https://github.com/coinbase/rest-hooks/commit/801f5e7fcdd10bc8526615042a2e40a946222a9c))
* Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a8c435c5ef74b3809c8950a2caceca8763))


### 📝 Documentation

* Update nested response docs with behaviors of rest package ([#471](https://github.com/coinbase/rest-hooks/issues/471)) ([04fe9b3](https://github.com/coinbase/rest-hooks/commit/04fe9b390e4e097605a96f268168d8918c4948df))



### [0.6.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@0.6.0...@rest-hooks/rest@0.6.1) (2021-01-19)


### 💅 Enhancement

* Widen RestFetch types to make overriding not break ([#479](https://github.com/coinbase/rest-hooks/issues/479)) ([2bccf12](https://github.com/coinbase/rest-hooks/commit/2bccf12f7892ccbc1d342bd529b3659c2935fb71))


### 📝 Documentation

* Update nested response docs with behaviors of rest package ([#471](https://github.com/coinbase/rest-hooks/issues/471)) ([04fe9b3](https://github.com/coinbase/rest-hooks/commit/04fe9b390e4e097605a96f268168d8918c4948df))



## 0.6.0 (2021-01-15)

* feat: Resources can have nested entities (#469) ([4eeeaae](https://github.com/coinbase/rest-hooks/commit/4eeeaae)), closes [#469](https://github.com/coinbase/rest-hooks/issues/469)
* enhance: Remove Readonly on Resource endpoint schemas (#468) ([0b98987](https://github.com/coinbase/rest-hooks/commit/0b98987)), closes [#468](https://github.com/coinbase/rest-hooks/issues/468)


### BREAKING CHANGE

* Resources will resolve with any nested
entities from their schemas, rather than the `pk` of those
entities




## <small>0.5.1 (2021-01-06)</small>

* pkg: Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a))





## 0.5.0 (2020-12-08)

* feat: Add RestEndpoint type (#427) ([dc47667](https://github.com/coinbase/rest-hooks/commit/dc47667)), closes [#427](https://github.com/coinbase/rest-hooks/issues/427)





## <small>0.4.1 (2020-09-08)</small>

* fix: TypeScript 4 compatibility (#406) ([5d82e24](https://github.com/coinbase/rest-hooks/commit/5d82e24)), closes [#406](https://github.com/coinbase/rest-hooks/issues/406)





## 0.4.0 (2020-08-09)

* feat: Simple AbortController integration (#392) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563d)), closes [#392](https://github.com/coinbase/rest-hooks/issues/392)
* pkg: Rely on latest endpoint ([801f5e7](https://github.com/coinbase/rest-hooks/commit/801f5e7))





## <small>0.3.1 (2020-08-09)</small>

* enhance: Simplify endpoint memoization and provide new extensions (#391) ([d874d0b](https://github.com/coinbase/rest-hooks/commit/d874d0b)), closes [#391](https://github.com/coinbase/rest-hooks/issues/391)
* fix: Resource endpoint memoization ([744431e](https://github.com/coinbase/rest-hooks/commit/744431e))





## 0.3.0 (2020-08-08)

* enhance: Memoize Resource endpoints (#390) ([67bc90f](https://github.com/coinbase/rest-hooks/commit/67bc90f)), closes [#390](https://github.com/coinbase/rest-hooks/issues/390)
* internal: Test using endpoints directly (#389) ([bb0e8fd](https://github.com/coinbase/rest-hooks/commit/bb0e8fd)), closes [#389](https://github.com/coinbase/rest-hooks/issues/389)
* feat: Support extra endpoint members and inheritance (#387) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486)), closes [#387](https://github.com/coinbase/rest-hooks/issues/387)





## <small>0.2.1 (2020-08-04)</small>

* fix: Handle entities updated with new indexes (#384) ([2ee3bb6](https://github.com/coinbase/rest-hooks/commit/2ee3bb6)), closes [#384](https://github.com/coinbase/rest-hooks/issues/384)
* fix: Infer useFetcher() has no body when not present in fetch (#385) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd399)), closes [#385](https://github.com/coinbase/rest-hooks/issues/385)





## 0.2.0 (2020-07-31)

* feat: Re-export normalizr from 'rest' lib ([4362686](https://github.com/coinbase/rest-hooks/commit/4362686))





## 0.1.0 (2020-07-27)

* enhance: Keep legacy Resource (#376) ([fdd1f7c](https://github.com/coinbase/rest-hooks/commit/fdd1f7c)), closes [#376](https://github.com/coinbase/rest-hooks/issues/376)
* feat: Add @rest-hooks/rest package (#375) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125)), closes [#375](https://github.com/coinbase/rest-hooks/issues/375)
