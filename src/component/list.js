import './list.css'

const List = ({txt,onDel }) => {

    return (
        <>
            {txt.map((item,index) => {
                return (
                    <div key={index} className={'in-item  d-flex  justify-content-between align-items-baseline  mt-4'}><p
                        className={'align-items-baseline'}><input className={'form-check-input mx-2'}
                                                                   type={"checkbox"}  />{item.innerT}</p>
                        <button className={'btn btn-sm btn-danger'} onClick={()=>onDel(item.id)}>delete</button>
                    </div>
                )
            })}
        </>

       )
}
export default List;