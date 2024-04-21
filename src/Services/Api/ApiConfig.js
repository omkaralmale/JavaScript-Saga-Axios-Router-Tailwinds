export const getBaseUrl = () => {
  switch (process.env.CURRENT_STAGE) {
    case "staging":
      return process.env.REACT_APP_API_STG;
    case "production":
      return process.env.REACT_APP_API_PRO;
    default:
      return process.env.REACT_APP_API_DEV;
  }
};
