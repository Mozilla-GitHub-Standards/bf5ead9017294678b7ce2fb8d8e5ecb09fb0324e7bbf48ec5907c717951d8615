const gql = require('graphql-tag').default;

const goodFirstBugs = gql`
  {
    good_first_bugs: search(
      type: ISSUE
      query: """
       repo:mozilla/addons
      repo:mozilla/addons-server
       repo:mozilla/addons-frontend
       repo:mozilla/addons-linter
       label:"contrib: good first bug"
       is:open
       sort:updated-desc
      """
      first: 100
    ) {
      issueCount
      results: edges {
        issue: node {
          ... on Issue {
            updatedAt
            title
            url
            repository {
              name
            }
            labels(first: 100) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

module.exports = {
  goodFirstBugs,
};
