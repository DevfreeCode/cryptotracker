class Http {
  static instance = new Http();

  get = async (url: string) => {
    try {
      const request = await fetch(url);
      const json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP GET Error: ', err);
      throw Error(err);
    }
  };

  post = async (url: string, body: any) => {
    try {
      const requet = await fetch(url, {
        method: 'POST',
        body,
      });
      const json = await requet.json();
      return json;
    } catch (err) {
      console.error('HTTP POST Error: ', err);
      throw Error(err);
    }
  };

  delete = async (url: string) => {
    try {
      const request = await fetch(url, {
        method: 'DELETE',
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP DELETE Error: ', err);
      throw Error(err);
    }
  };

  put = async (url: string, body: any) => {
    try {
      const request = await fetch(url, {
        method: 'PUT',
        body,
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP PUT Error: ', err);
      throw Error(err);
    }
  };
}

export default Http;
