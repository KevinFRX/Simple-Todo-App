import Search from "../Search/Search"
import AddTask from "../AddTask/AddTask"
import './Header.css'

export default function Header({onSearch, onCreate}) {
    return (
        <div className="header">
            <div className='search-container'>
                <Search onSearch={onSearch} />
            </div>
            <div className='add-task-container'>
                <AddTask onCreate={onCreate} />
            </div>
        </div>
    )
}
