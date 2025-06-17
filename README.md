# nonphysical-website
website for nonphysical.io

## Deploy website on GitHub Pages (github.io)

1. Install gh-pages

    Run this command in your project:
  
    npm install gh-pages --save-dev

    This package helps deploy your React app to GitHub Pages.

2. Update package.json

    Modify your package.json file:

    "homepage": "https://<your-username>.github.io/<repository-name>",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }

    "predeploy" runs the build (e.g., using vite, or react-scripts) and places it in
    the dist folder (vite) or build folder(react-scripts).
    "deploy" then deploys the relevant folder to the gh-pages branch.Replace your-username with your GitHub username and repository-name with your repo name.

3. Push Your Code to GitHub

    Ensure your project is in a public GitHub repository.

4. Deploy the Website

    Run:
    npm run deploy

    This will build your React app and push it to the gh-pages branch.

5. Enable GitHub Pages

    Go to your GitHub repository → Settings → Pages.

    Select the gh-pages branch as the source.

    Your site will be available at https://your-username.github.io/repository-name.
