
const Link = ({route}) => {
    return (
        <li className="mr-8 hover:bg-cyan-400 px-2"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;