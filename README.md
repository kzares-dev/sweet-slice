# Audit AI

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

> NCR Atleos's Audit AI mobile application

<img alt="Screenshot" longdesc="Supports Expo iOS" src="./assets/docs/screenshot.png" height="500"/>

## Usage

For development run the following command

```bash
cp .env.dev .env
```

Then run the following command to install the dependencies

```bash
yarn install
```

Then run the app using the following command

```bash
yarn run ios
```

## Release

To make a release run the following command

```bash
cp .env.production .env
```

Then run

```bash
eas build --platform preview
```

### iOS Run on device

Delete the `ios/build` folder, then run:

```bash
npx pod-install
```

After run

```bash
npx expo run:ios --device
```

## Environments

| Environment   | Description                                          |
| ------------- | ---------------------------------------------------- |
| `development` | Development environment                              |
| `preview`     | Preview environment                                  |
| `production`  | Production environment. Will be used for the release |
# sweet-slice
