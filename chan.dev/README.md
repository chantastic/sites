# Static Deployment on Now

Live Example: static-example.now.sh

This example shows a project which is deployed with [ZEIT Now](https://zeit.co/now).

**By default, deployments with Now are static unless additional [configuration](https://zeit.co/docs/v2/deployments/configuration) is provided** to instruct how to serve the [output](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

This project consists of static files (`index.html`, `css/styles.css`, `js/main.js`, and `js/timeago.js`) which make up a simple static website that shows 5 of the latest Hacker News posts.

## Structure

If no [`now.json` file](https://zeit.co/docs/v2/deployments/configuration) with a [`builds` property](https://zeit.co/docs/v2/deployments/builds) exists in the root of the project, where the deployment is made from, each file in the project will be deployed statically.

ZEIT Now also provides default routing for `index` files as the root of a path. In this case, `index.html` exists at the base of the project and so is served as the `/` root path.

The `index.html` file also links to `css/styles.css`, `js/main.js`, and `js/timeago.js` which are all deployed as static files with Now, since no `builds` property exists in this example.

Last, but not least, the `now.json` file acts as an instructional configuration file for Now that helps define how your deployment should be built and served.

In this project, the `now.json` file only contains two properties:
- `version`, which tells Now which [platform version](https://zeit.co/docs/v2/platform/overview/#versioning) you wish to deploy and serve content with.
- `name`, which defines a project name for all deployments using this codebase to be sorted under.

For more information on configuring your projects with Now, [read the Deployment Configuration documentation](https://zeit.co/docs/v2/deployments/configuration).

### Deploying This Project with ZEIT Now

With [Now CLI](https://zeit.co/docs/v2/getting-started/installation), you can initialise this project on your system with the following command in your terminal:

```shell
now init static
```

This command will create a `static` directory in your [current working directory](https://en.wikipedia.org/wiki/Working_directory).

Moving into this directory (with `cd static`), you can then deploy the project with the following command:

```shell
now
```

## Resources
For more information on how you can deploy your own static project, or any other project, see the following resources:

- [See more examples of projects you can deploy with Now](https://zeit.co/examples).
- [Read our official guides on how to set up and deploy any project with Now](https://zeit.co/guides).
- [Get a quickstart with an introduction to Now on the ZEIT Documentation](https://zeit.co/docs).
- [Initialize your project without any manual work with ZEIT project set up](https://zeit.co/new).


