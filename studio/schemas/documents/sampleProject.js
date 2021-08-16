import {format} from 'date-fns'

export default {
  name: 'sampleProject',
  title: 'Sample project',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{type: 'figure'}]
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Pris',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
   {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'images'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  },
  initialValue: () => ({
    publishedAt: (new Date()).toISOString()
  })
}
