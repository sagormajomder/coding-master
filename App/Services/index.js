import { gql, request } from 'graphql-request';

const MASTER_URL =
  'https://api-ap-south-1.hygraph.com/v2/clq95qbcfdje501uofx0f3vb5/master';

export const getCourseList = async courseLevel => {
  const query = gql`
    query CourseList {
      courses(where: { level: ${courseLevel} }) {
        id
        name
        price
        level
        tags
        time
        author
        description {
          markdown
        }
        banner {
          url
        }
        chapters {
          id
          title
          content {
            heading
            description {
              markdown
            }
            output {
              markdown
            }
          }
        }
        icon {
          url
        }
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};
