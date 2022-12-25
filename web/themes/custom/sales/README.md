# sales

This is Kanopi's starter theme that integrates Storybook and Bootstrap.

This theme is originally from [emulsify-drupal](https://github.com/emulsify-ds/emulsify-drupal)

## Approach

This theme is meant to be included in a project by downloading this repo and adding it to a full Drupal build repo.

The Drupal build repo with have the stuff to run Storybook within Docksal.

There is a [script in the Drupal Starter repo](https://github.com/kanopi/drupal-starter/blob/main/.docksal/commands/rename-kdcl-basic) that will rename everything so it can be project specific. 

## Local development

You are able to spin up Storybook and build components from just this repo without having Drupal as a dependency.  Integrating in to twig templates will require Drupal however.

As we continue to extend the starter repo with more components this should be enough.

### Notes

CriticalCSS needs testing to work local currently there is a dependency on it working in Docksal.