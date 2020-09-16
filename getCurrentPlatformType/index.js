const getCurrentPlatformType = () => {
  let agent = navigator.userAgent.toLocaleLowerCase();
  let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (agent.indexOf("win32") >= 0) {
    return "win32";
  }
  if (agent.indexOf("win64") >= 0) {
    return "win64";
  }
  if (isMac) {
    return "mac";
  }
};

export default getCurrentPlatformType;
