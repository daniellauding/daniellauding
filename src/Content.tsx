import React, {useCallback} from 'react';
import classNames from 'classnames';

const Component = ({type, value}) => {
    if (type === 'h1') {
        return <h1>{value}</h1>
    }
    if (type === 'h2') {
        return <h2>{value}</h2>
    }
    if (type === 'p') {
        return <p>{value}</p>
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
        </div>
    );
}

export default Content;