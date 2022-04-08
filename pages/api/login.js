import cookie from "cookie"

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.Header(
        "Set-Cookie",
        cookie.serialize("Token", process.env.TOKEN, {
            sameSite: 'strict',
            maxAge: 60 * 60,
            path: '/',
        })
      );

      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;