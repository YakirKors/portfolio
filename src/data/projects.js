function buildProjectImages(folderName, primaryImageFileName, projectTitle) {
  const primaryImagePath = `../assets/images/projects/${folderName}/${primaryImageFileName}`

  return Object.entries(
    import.meta.glob('../assets/images/projects/*/*.{jpg,jpeg,png}', {
      eager: true,
      import: 'default',
    }),
  )
    .filter(([path]) => path.includes(`/projects/${folderName}/`))
    .sort(([leftPath], [rightPath]) => {
      if (leftPath === primaryImagePath) {
        return -1
      }

      if (rightPath === primaryImagePath) {
        return 1
      }

      return leftPath.localeCompare(rightPath)
    })
    .map(([, src], index) => ({
      src,
      alt: `${projectTitle} screen ${index + 1}`,
    }))
}

const calliberCustomerImages = buildProjectImages(
  'calliberCustomers',
  'a12d7b23-c562-4de5-9db8-1f5c55d4d3ae.jpg',
  'Calliber Customer App',
)

const calliberProviderImages = buildProjectImages(
  'calliberPro',
  '356004b3-b291-4433-b0da-9f87cac08c79.jpg',
  'Calliber Provider App',
)

const printyImages = buildProjectImages(
  'printy',
  'Screenshot_1777374654.png',
  'Printy',
)

export const projects = [
  {
    title: 'Calliber Customer App',
    description:
      'A customer app that helps people quickly find trusted professionals for everyday services.',
    techStack: ['React Native', 'Expo', 'Google Cloud', 'Node.js', 'WebSockets'],
    image: calliberCustomerImages[0]?.src ?? '',
    images: calliberCustomerImages,
    links: {
      'App Store': '',
      'Google Play': '',
      GitHub: '',
    },
  },
  {
    title: 'Calliber Provider App',
    description:
      'A work management app that helps service providers organize jobs, requests, and daily operations.',
    techStack: ['React Native', 'Expo', 'Google Cloud', 'Node.js', 'WebSockets'],
    image: calliberProviderImages[0]?.src ?? '',
    images: calliberProviderImages,
    links: {
      'App Store': '',
      'Google Play': '',
      GitHub: '',
    },
  },
  {
    title: 'Printy',
    description:
      'A personal 3D printing project for showcasing prints, products, and marketplace-style discovery.',
    techStack: ['Flutter', 'Firebase', 'Dart'],
    image: printyImages[0]?.src ?? '',
    images: printyImages,
    links: {
      'App Store': '',
      'Google Play': '',
      GitHub: '',
    },
  },
]
