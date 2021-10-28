import Link from 'next/Link';

const About = () => {
    return (
        <>
            <h1>About Page</h1>
            <Link href="/">
                <button>Go back</button>
            </Link>
        </>
    )
}

export default About;