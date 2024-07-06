
<div align="center">


![Birdeee](https://github.com/iamkartiksehrawat/Stream-Bird/assets/134216694/4162daf1-5a29-4e11-89b8-cc2e05618d4d)


# StreamBird

![Static Badge](https://img.shields.io/badge/anytest-14.2-red?style=flat-square&label=NEXT&labelColor=gray&color=%8275e1)
![Static Badge](https://img.shields.io/badge/anytest-^2.2-red?style=flat-square&label=Redux&labelColor=gray&color=%23c45dea)
![Static Badge](https://img.shields.io/badge/anytest-MIT-red?style=flat-square&label=License&labelColor=gray&color=%233685ec)
![Static Badge](https://img.shields.io/badge/anytest-^18-red?style=flat-square&label=React&labelColor=gray&color=orange)
![Static Badge](https://img.shields.io/badge/anytest-^8.4-red?style=flat-square&label=Mongoose&labelColor=gray&color=%23f2ed69)
![Static Badge](https://img.shields.io/badge/anytest-kartik-red?style=flat-square&label=made%20by&labelColor=gray&color=%23d45349)

</div>



<div align="center">
<b>Built with Next.js, LiveKit, MongoDB, Shadcn UI and Clerk</b>
</div>

<div align="center">
StreamBird is a platform which allow users to create temporary live streams with real-time chat functionality.
</div>


## Table of Contents

- [Deployment Link](#deployment-link)
- [Preview](#preview)
- [Built with](#built-with)
- [How to Use](#how-to-use)
- [Planned Improvements](#planned-improvements)
- [License](#license)
- [Contributing](#contributing)

## Deployment link
https://stream-bird.vercel.app/

## Preview

Check out how it looks :

![image](https://github.com/iamkartiksehrawat/Stream-Bird/assets/134216694/4c825310-6393-4823-a1ce-c70b254d0e36)


## Built With

This Project was developed with the following technologies:

#### **Frontend**
  - [Next.js](https://nextjs.org/)
  - [Shadcn UI](https://github.com/shadcn-ui/ui)
  - [Tailwind](https://github.com/tailwindlabs/tailwindcss)
  - [Redux](https://github.com/reduxjs/redux)


#### **Backend**
  - [Mongoose](https://github.com/Automattic/mongoose)

#### **Database**
  - [Mongodb](https://www.mongodb.com/)

#### **SDK & Tools**
  - [Clerk](https://clerk.com/)
  - [Livekit](https://livekit.io/)
  - [Ngrok](https://ngrok.com/)

#### **Deployment**
  - Deployed on [Vercel](https://vercel.com/home)

## How to Use

### Requirements

To run the application you'll need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

* Clone the repository:
  * ```$ git clone https://github.com/iamkartiksehrawat/Stream-Bird.git ```

#### Install Dependencies

```bash

cd stream-bird
npm install
# or
yarn install

```

#### Environment Variables

(.env)

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=
DB_URI= 
CLERK_WEBHOOK_SECRET=
LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```


#### Development

```bash
cd streambird
npm run dev
# or
yarn dev

```

## Planned Improvements

1. **Replacing LiveKit with a my own custom [RTMP Server](https://github.com/iamkartiksehrawat/RTMP-server)**
   - **Objective:** Allow more users to stream effortlessly.
   - **Benefit:** Enhances scalability and performance by leveraging a custom RTMP server tailored to our needs.

2. **Using Amazon S3 for Stream Storage**
   - **Objective:** Store user streams efficiently.
   - **Benefit:** Reliable and scalable storage solution, ensuring user data is safely stored and easily accessible.

3. **Switching from Clerk to NextAuth for Authentication**
   - **Objective:** Provide more freedom and flexibility in user authentication.
   - **Benefit:** Offers a customizable and extensible authentication system, enhancing user experience and security.

These improvements will enable StreamBird to scale more effectively, providing better performance, storage solutions, and flexible authentication.

## License

This project is under the **MIT license**. See the [LICENSE](https://github.com/iamkartiksehrawat/Stream-Bird/blob/main/LICENSE) for more information.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

##

Feel free to explore the repository and get in touch if you have any questions or feedback. Happy coding!

Get in touch - 

[![Email - Kartik Sehrawat](https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail)](mailto:sehrawatkar@gmail.com)
[![Linkedin - iamkartiksehrawat](https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin)](https://www.linkedin.com/in/iamkartiksehrawat/)  












