import Image from 'next/image'

const Footer = () => {
    // <style jsx>
    //     {`
    //     .footer {
    //         display: flex;
    //         flex: 1;
    //         padding: 2rem 0;
    //         border-top: 1px solid #eaeaea;
    //         justify-content: center;
    //         align-items: center;
    //     }
        
    //     .footer a {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         flex-grow: 1;
    //     }

    //     .logo {
    //         height: 1em;
    //         margin-left: 0.5rem;
    //     }
    // `}
    // </style>
    return(
        <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}

export default Footer;