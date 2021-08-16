export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611a277a4a137efecf77ab4f',
                  title: 'Sanity Studio',
                  name: 'vipps-og-hent-loppis-studio',
                  apiId: 'a50d4231-2b14-49d4-94c3-d95bb549cb30'
                },
                {
                  buildHookId: '611a277afed15052d81f8f42',
                  title: 'Portfolio Website',
                  name: 'vipps-og-hent-loppis',
                  apiId: '2f8acea4-3cbd-4a03-bf02-16c2fa8a90b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hallvors/vipps-og-hent-loppis',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://vipps-og-hent-loppis.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
