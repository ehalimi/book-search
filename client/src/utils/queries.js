import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            email
            username
            bookCount
            savedBooks {
                bookId
                description
                authors
                title
                image
                link
            }
        }
    }
`;