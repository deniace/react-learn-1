import LikeButton from "./like-button";

function Logo() {
    return <p>This is logo</p>;
}

function Title() {
    return <p>This is Title</p>;
}

function Link() {
    return <a href="#">Link</a>;
}
function Nav() {
    return (
        <>
            <p>this is nav</p>
            <Link />
            <Link />
            <Link />
        </>
    );
}

function Header({ title }) {
    console.log(title);
    return (
        <div>
            {title}
            <Logo />
            <Title />
            <Nav />
        </div>
    );
}

// contoh 1
function Header1(props) {
    return <h1>{props.title}</h1>;
}

// contoh 2 template lateral
function Header2({ title }) {
    return <h1>{`Cool ${title}`}</h1>;
}

// contoh 3 return value
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return "Default title";
    }
}

function Header3({ title }) {
    return <h1>{createTitle(title)}</h1>;
}

// ternary operator
function Header4({ title }) {
    return <h1>{title ? title : "defailt title dari ternary"}</h1>;
}

function Article() {
    return <h2> This is Article </h2>;
}

function Footer() {
    return <p>This is footer</p>;
}

export default function HomePage() {
    const names = [
        "Ada lovelace",
        "Grace Hopper",
        "Margaret hamilton",
        "Deni Ace",
    ];

    return (
        <div>
            <Header title="React" />
            <Header title="js" />

            <Header1 title="dot" />
            <Header2 title="ini dari template lateral" />
            <Header3 />
            <Header3 title="ini header return value" />

            <Header4 />
            <Header4 title="ternary" />

            <Article />
            <ul>
                {names.map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>

            <LikeButton />
            <Footer />
        </div>
    );
}
