module.exports = {
  siteMetadata: {
    title: 'Alex Knight / UX UI Design / Tokyo, Japan',
    description: 'Alex Knight is a user experience and user interface designer from Australia, living in Tokyo, Japan.',
    keywords: 'Design, graphic, user interface, user experience, clean, minimal, animation, interaction, prototype, methodology, mvp, build, code, react'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 's7l2balf0h27',
        accessToken: '0UGnPMJK-6SLBR3J5iA6ToUPGBkqeqUJy1NuOKpZfhc'
      }
    }
  ],
}