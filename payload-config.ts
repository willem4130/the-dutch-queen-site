import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'

export default buildConfig({
  // Basic configuration
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  
  // Database configuration
  db: sqliteAdapter({
    client: {
      url: 'file:./data/payload.db',
    },
  }),

  // Rich text editor
  editor: lexicalEditor({}),

  // Admin configuration
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- The Dutch Queen CMS',
      favicon: '/favicon.ico',
      ogImage: '/new-logo-small.png',
    },
  },

  // TypeScript generation
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  // Sharp for image processing
  sharp,

  // Collections (content types)
  collections: [
    // Users collection for admin access
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'role',
          type: 'select',
          options: [
            {
              label: 'Admin',
              value: 'admin',
            },
            {
              label: 'Band Member',
              value: 'band-member',
            },
            {
              label: 'Manager',
              value: 'manager',
            },
          ],
          defaultValue: 'band-member',
          required: true,
        },
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },

    // Band Members collection
    {
      slug: 'band-members',
      admin: {
        useAsTitle: 'name',
        group: 'Band',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., Lead Vocals, Guitar, Drums, etc.',
          },
        },
        {
          name: 'bio',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'facebook',
              type: 'text',
            },
            {
              name: 'twitter',
              type: 'text',
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Show on main band page',
          },
        },
      ],
    },

    // Shows/Events collection
    {
      slug: 'shows',
      access: {
        read: () => true, // Allow public read access for frontend
      },
      admin: {
        useAsTitle: 'title',
        group: 'Events',
        defaultColumns: ['title', 'date', 'venue', 'status'],
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'venue',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          defaultValue: 'Netherlands',
        },
        {
          name: 'eventType',
          type: 'select',
          options: [
            {
              label: 'Full Band',
              value: 'full-band',
            },
            {
              label: 'Acoustic',
              value: 'acoustic',
            },
          ],
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'Upcoming',
              value: 'upcoming',
            },
            {
              label: 'Sold Out',
              value: 'sold-out',
            },
            {
              label: 'Cancelled',
              value: 'cancelled',
            },
            {
              label: 'Completed',
              value: 'completed',
            },
          ],
          defaultValue: 'upcoming',
        },
        {
          name: 'ticketUrl',
          type: 'text',
          admin: {
            description: 'Link to ticket sales',
          },
        },
        {
          name: 'price',
          type: 'text',
          admin: {
            description: 'e.g., €35.00 or Free',
          },
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Feature on homepage',
          },
        },
      ],
    },

    // Bookings collection
    {
      slug: 'bookings',
      admin: {
        useAsTitle: 'customerName',
        group: 'Business',
        defaultColumns: ['customerName', 'eventDate', 'eventType', 'status', 'createdAt'],
      },
      fields: [
        {
          name: 'customerName',
          type: 'text',
          required: true,
        },
        {
          name: 'customerEmail',
          type: 'email',
          required: true,
        },
        {
          name: 'customerPhone',
          type: 'text',
          required: true,
        },
        {
          name: 'eventDate',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'eventType',
          type: 'select',
          options: [
            {
              label: 'Full Band',
              value: 'full-band',
            },
            {
              label: 'Acoustic',
              value: 'acoustic',
            },
          ],
          required: true,
        },
        {
          name: 'venue',
          type: 'text',
          required: true,
        },
        {
          name: 'guestCount',
          type: 'number',
          required: true,
        },
        {
          name: 'budget',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'New',
              value: 'new',
            },
            {
              label: 'Under Review',
              value: 'under-review',
            },
            {
              label: 'Confirmed',
              value: 'confirmed',
            },
            {
              label: 'Cancelled',
              value: 'cancelled',
            },
            {
              label: 'Completed',
              value: 'completed',
            },
          ],
          defaultValue: 'new',
        },
        {
          name: 'adminNotes',
          type: 'richText',
          editor: lexicalEditor({}),
          admin: {
            description: 'Internal notes for band members',
          },
        },
      ],
    },

    // Contact Messages collection
    {
      slug: 'contacts',
      access: {
        create: () => true, // Allow public create for contact form submissions
      },
      admin: {
        useAsTitle: 'name',
        group: 'Business',
        defaultColumns: ['name', 'subject', 'type', 'createdAt'],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'subject',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          options: [
            {
              label: 'General Inquiry',
              value: 'general',
            },
            {
              label: 'Booking Request',
              value: 'booking',
            },
            {
              label: 'Press Inquiry',
              value: 'press',
            },
            {
              label: 'Technical Support',
              value: 'technical',
            },
          ],
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'New',
              value: 'new',
            },
            {
              label: 'In Progress',
              value: 'in-progress',
            },
            {
              label: 'Resolved',
              value: 'resolved',
            },
          ],
          defaultValue: 'new',
        },
      ],
    },

    // Performance Types collection - replaces hardcoded performance data
    {
      slug: 'performance-types',
      access: {
        read: () => true, // Allow public read access for frontend
      },
      admin: {
        useAsTitle: 'name',
        group: 'Content',
        description: 'Manage different performance types (Full Band, Acoustic, etc.)',
        defaultColumns: ['name', 'slug', 'colorTheme'],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "Full Band Experience", "Acoustic Sessions"',
          },
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            description: 'URL-friendly identifier (e.g., "full-band", "acoustic")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Main description of this performance type',
          },
        },
        {
          name: 'idealFor',
          type: 'array',
          label: 'Ideal For',
          fields: [
            {
              name: 'item',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'List of venues/events this performance type is ideal for',
          },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'Key features of this performance type',
          },
        },
        {
          name: 'songList',
          type: 'array',
          label: 'Featured Songs',
          fields: [
            {
              name: 'song',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'Representative songs performed in this format',
          },
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image',
          admin: {
            description: 'Main image representing this performance type',
          },
        },
        {
          name: 'imageTitle',
          type: 'text',
          admin: {
            description: 'Title overlay on the image',
          },
        },
        {
          name: 'imageDescription',
          type: 'text',
          admin: {
            description: 'Description overlay on the image',
          },
        },
        {
          name: 'colorTheme',
          type: 'select',
          options: [
            {
              label: 'Red Theme',
              value: 'red',
            },
            {
              label: 'Yellow Theme', 
              value: 'yellow',
            },
          ],
          defaultValue: 'red',
          required: true,
        },
        {
          name: 'layoutReverse',
          type: 'checkbox',
          label: 'Reverse Layout',
          admin: {
            description: 'Swap image and content positions',
          },
        },
        {
          name: 'displayOrder',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Order of appearance (lower numbers first)',
          },
        },
      ],
    },

    // Media collection for uploads
    {
      slug: 'media',
      access: {
        read: () => true, // Allow public read access for frontend
      },
      admin: {
        group: 'Media',
      },
      upload: {
        mimeTypes: ['image/*', 'audio/*', 'video/*'],
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 300,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 800,
            height: 600,
            position: 'centre',
          },
          {
            name: 'hero',
            width: 1920,
            height: 1080,
            position: 'centre',
          },
        ],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          admin: {
            description: 'Alt text for accessibility',
          },
        },
        {
          name: 'caption',
          type: 'text',
        },
        {
          name: 'category',
          type: 'select',
          options: [
            {
              label: 'Performance Photos',
              value: 'performance',
            },
            {
              label: 'Band Photos',
              value: 'band',
            },
            {
              label: 'Behind the Scenes',
              value: 'behind-scenes',
            },
            {
              label: 'Promotional',
              value: 'promotional',
            },
            {
              label: 'Audio Files',
              value: 'audio',
            },
            {
              label: 'Videos',
              value: 'video',
            },
          ],
        },
      ],
    },
  ],

  // Global settings
  globals: [
    // Site Settings - Complete site content management
    {
      slug: 'site-settings',
      access: {
        read: () => true, // Allow public read access for frontend
      },
      admin: {
        group: 'Settings',
        description: 'Manage all site-wide content including hero images, about section, pricing, and location info',
      },
      fields: [
        {
          name: 'general',
          type: 'group',
          label: 'General Site Settings',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              defaultValue: 'The Dutch Queen',
              required: true,
            },
            {
              name: 'tagline',
              type: 'text',
              defaultValue: 'Premium Queen tribute band from the Netherlands',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              defaultValue: 'The Dutch Queen - Premium Queen tribute band from the Netherlands. Book us for your event!',
            },
          ],
        },
        {
          name: 'heroSection',
          type: 'group',
          label: 'Hero Section Content',
          fields: [
            {
              name: 'acousticImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Acoustic Performance Image',
              admin: {
                description: 'Left side image for the hero compare slider',
              },
            },
            {
              name: 'fullBandImage', 
              type: 'upload',
              relationTo: 'media',
              label: 'Full Band Performance Image',
              admin: {
                description: 'Right side image for the hero compare slider',
              },
            },
            {
              name: 'heroTitle',
              type: 'text',
              defaultValue: 'Experience Queen Like Never Before',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              defaultValue: 'From intimate acoustic sessions to full stadium productions',
            },
          ],
        },
        {
          name: 'aboutSection',
          type: 'group', 
          label: 'About Section Content',
          fields: [
            {
              name: 'mainHeading',
              type: 'text',
              defaultValue: 'About The Dutch Queen',
              required: true,
            },
            {
              name: 'introText',
              type: 'textarea',
              defaultValue: 'From the heart of the Netherlands comes a tribute to the greatest rock band of all time. We do not just play Queen music - we live it, breathe it, and share it with the world.',
            },
            {
              name: 'storyHeading',
              type: 'text',
              defaultValue: 'Our Story',
            },
            {
              name: 'storyContent',
              type: 'richText',
              defaultValue: [
                {
                  children: [
                    {
                      text: 'Born from a shared passion for Queen timeless music, The Dutch Queen has been captivating audiences across the Netherlands and beyond since our formation. We understand that Queen music deserves nothing less than perfection.'
                    }
                  ]
                }
              ],
            },
            {
              name: 'storyImage',
              type: 'upload',
              relationTo: 'media',
              label: 'About Section Image',
            },
            {
              name: 'stats',
              type: 'array',
              label: 'Band Statistics',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text', 
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'text',
                  admin: {
                    description: 'SVG icon name or emoji',
                  },
                },
              ],
              defaultValue: [
                { label: 'Years Active', value: '5+', icon: '🎸' },
                { label: 'Shows Performed', value: '150+', icon: '🎤' },
                { label: 'Happy Clients', value: '100+', icon: '⭐' },
                { label: 'Countries', value: '3', icon: '🌍' },
              ],
            },
          ],
        },
        {
          name: 'contactSection',
          type: 'group',
          label: 'Contact Section Content',
          fields: [
            {
              name: 'pricingGuide',
              type: 'array',
              label: 'Pricing Guide',
              fields: [
                {
                  name: 'service',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'priceRange',
                  type: 'text',
                  required: true,
                },
              ],
              defaultValue: [
                { service: 'Acoustic Sessions', priceRange: '€2,500 - €5,000' },
                { service: 'Full Band Shows', priceRange: '€7,500 - €15,000' },
              ],
            },
            {
              name: 'locationInfo',
              type: 'group',
              label: 'Location Information',
              fields: [
                {
                  name: 'baseLocation',
                  type: 'text',
                  defaultValue: 'Based in Amsterdam',
                },
                {
                  name: 'serviceAreas',
                  type: 'text', 
                  defaultValue: 'Performing throughout the Netherlands & Europe',
                },
              ],
            },
            {
              name: 'socialFollowText',
              type: 'text',
              defaultValue: 'Follow Our Journey',
            },
          ],
        },
      ],
    },

    {
      slug: 'band-info',
      access: {
        read: () => true, // Allow public read access for frontend
      },
      admin: {
        group: 'Settings',
      },
      fields: [
        {
          name: 'bandName',
          type: 'text',
          defaultValue: 'The Dutch Queen',
        },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'Premium Queen tribute band from the Netherlands',
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'contactInfo',
          type: 'group',
          fields: [
            {
              name: 'email',
              type: 'email',
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'bookingEmail',
              type: 'email',
            },
          ],
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'facebook',
              type: 'text',
            },
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'youtube',
              type: 'text',
            },
            {
              name: 'spotify',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
})