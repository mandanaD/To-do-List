import './list.css'
import {useState} from 'react';

const Head = ({onAdd}) => {
    let [innerT, setNText] = useState('')
    const data = () => {
        onAdd({innerT})
    }

    return (
        <>
            <h1 id={'title'}>TO DO LIST</h1>
            <div className={'d-flex align-items-baseline justify-content-center mt-2'}>
                <input id={'input'} value={innerT} type={'text'} onChange={(event => setNText(event.target.value))}
                       className={'form-control w-75 mx-2'}/>
                <button className={'p-2 btn btn-sm btn-success '} onClick={data}>Add</button>

            </div>
        </>
    );
}

export default Head;