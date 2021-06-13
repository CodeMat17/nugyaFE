import gql from 'graphql-tag';

export const executivesQuery = gql `
query executivesQuery {
    executives {
        id
        slug
        post
        name
        image
    }
}
`

export const membersQuery = gql `
query membersQuery {
    members {
        id
        name
        show
    }
}
`

export const usersQuery = gql `
query usersQuery {
    users {
        id
        username
        blocked
    }
}
`

export const messagesQuery = gql `
query messagesQuery {
    messages {
        id
        name
        seen
        show
    }
}
`