import qs from "query-string";

interface UrlQueryParams {
  key: string;
  params: string;
  value: string;
}

interface RemoveUrlQueryParams {
  keysToRemove: string[];
  params: string;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);

  queryString[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const formNewUrlWithArray = ({
  path,
  keys,
  values,
}: {
  path: string; // The path after the base URL, e.g., "/editor"
  keys: string[];
  values: string[];
}) => {
  if (keys.length !== values.length) {
    throw new Error("Keys and values arrays must have the same length.");
  }

  const queryString: Record<string, string> = {};

  keys.forEach((key, index) => {
    queryString[key] = values[index];
  });

  return qs.stringifyUrl({
    url: `${window.location.origin}${path}`, // Dynamically fetch the base URL
    query: queryString,
  });
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      skipNull: true,
    },
  );
};
