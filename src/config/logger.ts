const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`${getTimeStamp()} [INFO] [${namespace}] ${message}`, object);
  } else {
    console.log(`${getTimeStamp()} [INFO] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(`${getTimeStamp()} [ERROR] [${namespace}] ${message}`, object);
  } else {
    console.error(`${getTimeStamp()} [ERROR] [${namespace}] ${message}`);
  }
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(`${getTimeStamp()} [DEBUG] [${namespace}] ${message}`, object);
  } else {
    console.debug(`${getTimeStamp()} [DEBUG] [${namespace}] ${message}`);
  }
};

const getTimeStamp = (): string => {
  return new Date().toISOString();
};

export default {
  info,
  error,
  debug,
};
