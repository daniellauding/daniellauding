import React from 'react';

const Component = ({type, value}) => {
    if (type === 'h1') {
        return <h1 className="pt-0 mt-8 mb-0 text-3xl text-center text-black lg:font-bold">{value}</h1>
    }
    if (type === 'h2') {
        return <h2 className="pt-0 mt-8 mb-0 text-2xl text-center text-black lg:font-bold">{value}</h2>
    }
    if (type === 'h3') {
        return <h3 className="pt-0 mt-8 mb-0 text-1xl text-center text-black lg:font-bold">{value}</h3>
    }
    if (type === 'p') {
        return <p className="pt-0 mb-0 text-center text-black lg:font-light">{value}</p>
    }
    if (type === 'img') {
        return <img src={value} alt="" />
    }
    return null;
}

const Content = ({item, clearActive}) => {

    return (
        <div>
            <h2>{item.client}</h2>
            Case details:
            <p>{item.desc}</p>
            <div>
                {item?.content?.map((row, index) => <Component key={index} {...row} />)}
            </div>
            <button onClick={clearActive}>Back</button>
            <p>Protected: {item.protected ? 'yes' : 'no'}</p>
            {/* {item.protected ? (
                <p>yes protected</p>
            ) : (
                <p>no protected</p>
            )
            } */}
        </div>
    );
}

export default Content;