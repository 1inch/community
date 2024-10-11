/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/overview', // Correct document ID
        'governance/voting-process', // Correct document ID
        'governance/dao-treasury', // Correct document ID (previously misnamed)
        // Add more valid document IDs here
      ],
    },
  ],
};

