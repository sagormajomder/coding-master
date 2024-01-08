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
            id
            heading
            description {
              markdown
              html
            }
            output {
              markdown
              html
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

export const enrolledCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {
          courseId: "${courseId}"
          userEmail: "${userEmail}"
          course: { connect: { id: "${courseId}" } }
        }
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const response = await request(MASTER_URL, mutationQuery);
  return response;
};

export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const query = gql`
    query GetUserEnrolledCourse {
      userEnrolledCourses(
        where: {
          courseId: "${courseId}"
          userEmail: "${userEmail}"
        }
      ) {
        courseId
        id
        completedChapter {
          chapterId
        }
      }
    }
  `;
  const response = await request(MASTER_URL, query);
  return response;
};

export const completedChapter = async (
  chapterId,
  recordId,
  userEmail,
  points
) => {
  const mutationQuery = gql`
    mutation CompletedChapter {
      updateUserEnrolledCourse(
        data: {completedChapter: {create: {data: {chapterId: "${chapterId}"}}}}
        where: {id: "${recordId}"}
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
      updateUserDetail( where: {email: "${userEmail}"},data: {point: ${points}}) {
        point
      }
      publishUserDetail(where: {email: "${userEmail}"}) {
        id
      }
    }
    
  `;
  const response = await request(MASTER_URL, mutationQuery);
  return response;
};

export const createNewUser = async (
  userName,
  email,
  profileImageUrl,
  points
) => {
  const mutationQuery = gql`
    mutation CreateNewUser {
      upsertUserDetail(
        upsert: {
          create: { email: "${email}", point: ${points}, profileImage: "${profileImageUrl}", userName: "${userName}" }
          update: { email: "${email}", point: ${points}, profileImage: "${profileImageUrl}", userName: "${userName}" }
        }
        where: { email: "${email}" }
      ) {
        id
      }
      publishUserDetail(where: { email: "${email}" }) {
        id
      }
    }
  `;

  const response = await request(MASTER_URL, mutationQuery);
  return response;
};

export const getUserDetail = async email => {
  const query = gql`
    query GetUserDetail {
      userDetail(where: { email: "${email}" }) {
        point
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

export const getAllUsers = async () => {
  const query = gql`
    query GetAllUsers {
      userDetails(orderBy: point_DESC) {
        id
        profileImage
        userName
        point
      }
    }
  `;
  const response = await request(MASTER_URL, query);
  return response;
};
