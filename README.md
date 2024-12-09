# RICOBOT

This Ricobot project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to Run

1. Clone the Repo
2. Comment out/in the following from `hostUrl.js`:
    - comment out: `export const hostUrl = 'api/';`
    - comment in: `export const hostUrl = 'http://localhost:5000/'`
3. Do an `npm install`
4. Start mock server with `npm run mock-server`
5. Run app with `npm start`
6. Open [http://localhost:3000/ricobot](http://localhost:3000/ricobot) to view it in your browser

### Mock Server config

The mock server serves pageData which contains metadata for texts and images to be loaded dynamically from `Server/db.json`

### Redux store

Redux is used for state management to fetch and store pageData

### Styles

Global themes and breapoints set and injected to the app with  `styled-components`

### Demo link

[https://ricobot-orpin.vercel.app/ricobot](https://ricobot-orpin.vercel.app/ricobot)

### Additional Callouts

- The framework is built to be highly scalable, dynamic and configurable. All routes, pages, text data and image data is metadata driven.
- While running locally, the mock-server serves the page metadata json from server/db.json
- Since only mobile and desktop specifications were given, tablet viewports are considered as desktop.
- The linear gradient (left to right) mentioned in the document didn’t match the mockups for laptop/mobile. Hence modified it to match the mockup
- The mockup for mobile did not have the correct font for the paragraph, but implementation has the ‘Raleway’ font
- The hover behavior for thumbnails was unspecified, so implemented to maintain a good UX (non-jumping)
- Viewpoint change behavior for background and content was unspecified, so implemented best practices
- For the foreground image, as it needs to be pinned to the bottom of the container and overflow by certain pixels on top, the behavior for size changes was unclear. The implementation is: The background height remains same, hence the foreground size should not change.