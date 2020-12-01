export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fc5fe907ad84dfdb4c86ad3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1k5bxxbm',
                  apiId: '022f418c-d95b-4c62-a767-e08c23652622'
                },
                {
                  buildHookId: '5fc5fe9046af88edce5dd501',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tdyqha67',
                  apiId: '8f43e955-790f-45ee-a268-fd73d3ebf07a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/72perseid/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tdyqha67.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
