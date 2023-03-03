export const url = `http://bauertest-001-site1.ftempurl.com/`;


// account
export const signIn = `${url}api/Account/Authenticate`;

// issues
export const getListOfIssues = `${url}api/Issue/GetPendingIssue`;
export const getIssueDetails = `${url}api/Issue/GetIssueDetails`;

// actions
export const getActionsByUser = `${url}api/Action/GetUserProjectByUser`;
export const createActionsByUser = `${url}api/Action`;
