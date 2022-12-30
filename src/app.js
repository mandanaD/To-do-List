import {useState} from 'react';
import List from "./component/list";
import Head from "./component/head";

const Create = () => {
    let [texts, useText] = useState(
        [
            {id: 1, innerT: 'Do math homeworks'},
            {id: 2, innerT: 'Take shower'},
            {id: 3, innerT: 'go to the store'},
            {id: 4, innerT: 'go to the doctor'}
        ]
    )
    const Add = (innerT) => {
        const id = Math.floor(Math.random() * 10000)
        const newT = {id, ...innerT}
        useText([...texts, newT])
        console.log(newT)
    }
    const DeleteItem = (id) => {
        useText(texts.filter((item) => item.id !== id));
    }

    return (
        <div id={'container'} className={'container list-group w-50 mt-2'}>
            <Head onAdd={Add}/>
            <List onDel={DeleteItem} txt={texts}/>
        </div>

    )


}

export default Create;